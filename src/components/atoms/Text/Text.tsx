import classNames from "classnames";

export type TextVariant = keyof typeof variantClasses;

interface ExplicitProps {
  variant: TextVariant;
  className?: string;
  children?: string | string[];
}

// This allows Text Component props to match the props of the element defined by 'as'
type PropsWithAs<TElementType extends React.ElementType = React.ElementType> =
  Partial<
    ExplicitProps & {
      as: TElementType;
    }
  >;

type TextProps<TElementType extends React.ElementType> =
  PropsWithAs<TElementType> &
    Omit<React.ComponentProps<TElementType>, keyof PropsWithAs>;

const __DEFAULT_ELEMENT__ = "p";

const variantClasses = {
  "hero-headline": "tw-font-serif tw-text-4xl md:tw-text-7xl xl:tw-text-8xl",
  headline: "tw-font-serif tw-text-3xl xl:tw-text-5xl",
  "sub-headline": "tw-font-sans tw-text-2xl", // alt name - heading-24
  "rich-text-h2": "tw-font-serif tw-text-4xl md:tw-text-5xl xl:tw-text-7xl",
  "rich-text-h3": "tw-font-serif tw-text-3xl md:tw-text-4xl xl:tw-text-5xl",
  "rich-text-h4": "tw-font-serif tw-text-2xl md:tw-text-3xl xl:tw-text-4xl",
  "rich-text-h5": "tw-font-sans tw-text-xl md:tw-text-2xl tw-font-light",
  body: "tw-font-sans", // alt name - body-16
  "body-small": "tw-font-sans tw-text-sm", // alt name - body-14
  // secondary / non-responsive variants
  "heading-56": "tw-font-serif tw-text-8xl",
  "heading-48": "tw-font-serif tw-text-7xl",
  "heading-40": "tw-font-serif tw-text-6xl",
  "heading-36": "tw-font-serif tw-text-5xl",
  "heading-32": "tw-font-serif tw-text-4xl",
  "heading-28": "tw-font-serif tw-text-3xl",
  "heading-24-light": "tw-font-sans tw-text-2xl tw-font-light",
  "heading-21": "tw-font-sans tw-text-xl",
  "heading-21-light": "tw-font-sans tw-text-xl tw-font-light",
  "body-18": "tw-font-sans tw-text-lg",
  "body-18-semibold": "tw-font-sans tw-text-lg tw-font-semibold",
  "body-16-semibold": "tw-font-sans tw-font-semibold",
  "body-14-semibold": "tw-font-sans tw-text-sm tw-font-semibold",
  "mono-14": "tw-font-mono tw-text-sm",
  "mono-12": "tw-font-mono tw-text-xs",
  "mono-14-semibold": "tw-font-mono tw-text-sm tw-font-semibold",
  "mono-12-semibold": "tw-font-mono tw-text-xs tw-font-semibold",
  "label-12": "tw-font-sans tw-text-xs",
  "label-12-semibold": "tw-font-sans tw-text-xs tw-font-semibold",
};

const defaultTags: Record<
  string,
  "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "code" | "label"
> = {
  "hero-headline": "h1",
  headline: "h2",
  "sub-headline": "h3",
  body: "p",
  "heading-56": "h1",
  "heading-48": "h2",
  "heading-40": "h3",
  "heading-36": "h4",
  "heading-32": "h5",
  "heading-28": "h6",
  "heading-24-light": "h6",
  "heading-21": "h4",
  "body-small": "p",
  "body-18": "p",
  "body-18-semibold": "p",
  "body-16-semibold": "p",
  "body-14-semibold": "p",
  "mono-14": "code",
  "mono-12": "code",
  "mono-14-semibold": "code",
  "mono-12-semibold": "code",
  "label-12": "label",
  "label-12-semibold": "label",
};

function Text<
  TElementType extends React.ElementType = typeof __DEFAULT_ELEMENT__
>({
  as,
  className,
  variant = "body",
  children,
  ...props
}: TextProps<TElementType>) {
  const combinedClassName = classNames(variantClasses[variant], className);
  const Tag = as ?? defaultTags[variant] ?? "span";

  return (
    <Tag className={combinedClassName} {...props}>
      {children}
    </Tag>
  );
}

export default Text;
