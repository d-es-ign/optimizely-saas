
import BreakpointEnum from '@/components/models/enums/BreakpointEnum';
import ThemeEnum from '@/components/models/enums/ThemeEnum';
import { IImage } from '@/components/models/IImage';
import classNames from 'classnames';
import Image from '../Image/Image';
import Text from '../Text/Text';

export interface IAuthorBlock {
  readonly author: string;
  readonly authorPosition: string;
  readonly breakpoint?: BreakpointEnum;
  readonly image?: IImage;
  readonly large?: boolean;
  readonly theme?: ThemeEnum;
}

const AuthorBlock = ({
  author,
  authorPosition,
  breakpoint,
  image,
  large,
  theme = ThemeEnum.Light,
}: IAuthorBlock) => (
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
      <Text variant="body-14-semibold">{author}</Text>
      <Text variant="body-small">{authorPosition}</Text>
    </div>
  </div>
);

export default AuthorBlock;
