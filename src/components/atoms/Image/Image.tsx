"use client";
import { IImage } from "../../models/IImage";
import BreakpointEnum from "../../models/enums/BreakpointEnum";
import breakpoints from "../../../utility/config/breakpoints";
import useBreakpoint from "../../../utility/hooks/useBreakpoint";
import useDevicePixelRatio from "../../../utility/hooks/useDevicePixelRatio";
import classNames from "classnames";
import {
  PropsWithChildren,
  RefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

interface Props {
  readonly aspectRatio?: number;
  readonly classes?: string;
  readonly containerRef?: RefObject<HTMLElement>;
  readonly height?: number; // manually set height - only effective when width is set
  readonly image: IImage;
  readonly imageClasses?: string;
  readonly lazyLoad?: boolean;
  readonly quality?: number;
  readonly sizes?: string;
  readonly width?: number; // manually set width
}

const Image = ({
  aspectRatio, // width / height e.g. 0.5, 2 etc.
  children,
  classes,
  containerRef,
  height = 0,
  image,
  imageClasses,
  lazyLoad = true,
  quality = 70,
  sizes = "",
  width = 0,
}: PropsWithChildren<Props>) => {
  const [loaded, setLoaded] = useState(false);
  const devicePixelRatio = useDevicePixelRatio() ?? 1;
  const breakpoint = useBreakpoint() ?? BreakpointEnum.XLarge;
  const imgRef = useRef<HTMLImageElement>(null);

  const { url, altText, originalHeight, originalWidth, imageFocalPoint } =
    image ?? {};

  const fileExtension = url?.substring(url?.lastIndexOf(".") + 1);
  const hasParams = url?.includes("&"); // For images not coming from Opti

  const breakpointWidths = [
    375 * devicePixelRatio,
    752 * devicePixelRatio,
    1024 * devicePixelRatio,
    1408 * devicePixelRatio,
  ];

  const calculatedAspectRatio = useMemo(() => {
    if (width && height) {
      return width / height;
    } else if (aspectRatio) {
      return aspectRatio;
    }

    const originalAspectRatio = originalWidth / originalHeight;
    if (originalAspectRatio) return originalAspectRatio;
    else return undefined;
  }, [width, height, aspectRatio, originalWidth, originalHeight]);

  const heightString = (requestedWidth: number) => {
    return calculatedAspectRatio && ((width && height) || aspectRatio)
      ? `&height=${requestedWidth / calculatedAspectRatio}`
      : "";
  };

  const generateUrlWithExtension = (
    requestedWidth: number,
    quality?: number,
  ) => {
    const focalPointString = imageFocalPoint ? `&rxy=${imageFocalPoint}` : "";

    return `${url}?format=webp&width=${requestedWidth}${heightString(
      requestedWidth,
    )}${focalPointString}${quality ? `&quality=${quality}` : ""}`;
  };

  const isValidBase64ImageSource = (imageSrc: string) => {
    const regex =
      /^data:image\/(png|jpg|jpeg|gif);base64,[A-Za-z0-9+/]+={0,2}$/;
    return regex.test(imageSrc);
  };

  const isSvg = fileExtension === "svg";
  const isBase64Image = isValidBase64ImageSource(url);

  const containerWidth = containerRef?.current?.clientWidth;

  const src = () => {
    if (hasParams) return url;
    if (!loaded) return generateUrlWithExtension(150, 1);
    if (containerWidth)
      return generateUrlWithExtension(containerWidth, quality);
    return generateUrlWithExtension(width || breakpoints[breakpoint]);
  };

  const srcSet = useMemo(() => {
    return breakpointWidths
      .filter((breakpointWidth) => !width || breakpointWidth < width)
      .map(
        (breakpointWidth) =>
          `${generateUrlWithExtension(breakpointWidth)} ${breakpointWidth}w`,
      )
      .join(", ");
  }, [breakpointWidths, width]);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, [src]);

  if (!url || devicePixelRatio == null) return null;

  if (isSvg || isBase64Image) {
    return (
      <img src={url} alt={altText} className={imageClasses} draggable="false" />
    );
  }

  return (
    <>
      <picture className={classNames(classes, "tw-block tw-overflow-hidden")}>
        {!containerWidth && !hasParams && (
          <source type="image/webp" sizes={sizes} srcSet={srcSet} />
        )}
        <img
          ref={imgRef}
          alt={altText}
          sizes={sizes}
          className={classNames(
            imageClasses,
            { "tw-blur-xl": !loaded },
            "tw-transition tw-duration-500 tw-ease-in-out",
          )}
          draggable="false"
          style={{
            aspectRatio: calculatedAspectRatio,
          }}
          loading={lazyLoad ? "lazy" : "eager"}
          onLoad={() => setLoaded(true)}
          src={src()}
        />
        {children}
      </picture>
    </>
  );
};

export default Image;
