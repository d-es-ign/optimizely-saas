import Image from '@/components/atoms/Image/Image';
import Text from '@/components/atoms/Text/Text';
import { IImage } from '@/components/models/IImage';
import BreakpointEnum from '@/components/models/enums/BreakpointEnum';
import ThemeEnum from '@/components/models/enums/ThemeEnum';
import classNames from 'classnames';

export interface ILastSearch {
  readonly title: string;
  readonly subText: string;
  readonly breakpoint?: BreakpointEnum;
  readonly image?: IImage;
  readonly large?: boolean;
  readonly theme?: ThemeEnum;
}

const LastSearch = ({
  title,
  subText,
  breakpoint,
  image,
  large,
  theme = ThemeEnum.Light,
}: ILastSearch) => (
  <div
    className={classNames(
      { 'lg:tw-order-1': image },
      'tw-flex tw-shrink-0 tw-gap-xs xxl:tw-flex-col'
    )}
  >
    {image && (
      <div
        className={classNames(
          { 'xxl:tw-max-w-[180px]': large },
          'tw-max-w-[74px]'
        )}
      >
        <Image
          aspectRatio={
            breakpoint && breakpoint === BreakpointEnum.Max ? undefined : 1
          }
          image={image}
        />
      </div>
    )}
    <div
      className={classNames(
        image ? 'tw-col-span-3' : 'tw-col-span-4',
        theme === ThemeEnum.Dark ? 'tw-text-white' : 'tw-text-grey-80',
        'tw-flex tw-flex-col tw-justify-center'
      )}
    >
      <Text variant="body-14-semibold">{title}</Text>
      <Text variant="body-small">{subText}</Text>
    </div>
  </div>
);

export default LastSearch;
