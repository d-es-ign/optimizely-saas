import SizeEnum from '@/components/models/enums/SizeEnum';
import ThemeEnum from '@/components/models/enums/ThemeEnum';
import { ILoadingSpinner } from '@/components/models/ILoadingSpinner';
import classNames from 'classnames';

const LoadingSpinner = ({
  size = SizeEnum.Small,
  loadingLabel = '...loading',
  theme = ThemeEnum.Light,
}: ILoadingSpinner) => {
  const sizeClasses = classNames({
    'tw-w-xs tw-h-xs': size === SizeEnum.Small,
    'tw-w-sm tw-h-sm': size === SizeEnum.Medium,
    'tw-h-16 tw-w-16': size === SizeEnum.Large,
  });

  const borderClasses = classNames({
    'tw-border-2': size === SizeEnum.Small,
    'tw-border-[3px]': size === SizeEnum.Medium,
    'tw-border-4': size === SizeEnum.Large,
  });

  const segmentClasses = classNames({
    'tw-border-b-2 tw-border-l-2': size === SizeEnum.Small,
    'tw-border-b-[3px] tw-border-l-[3px]': size === SizeEnum.Medium,
    'tw-border-b-4 tw-border-l-4': size === SizeEnum.Large,
  });

  return (
    <div
      role="status"
      className={classNames(sizeClasses, 'tw-relative tw-animate-spin')}
    >
      <div
        aria-hidden="true"
        className={classNames(
          borderClasses,
          'tw-h-full tw-w-full tw-rounded-full tw-border-2 tw-border-black tw-bg-transparent'
        )}
      >
        <div
          className={classNames(
            theme === ThemeEnum.Light ? 'tw-bg-white' : 'tw-bg-grey-10',
            'tw-absolute tw-bottom-0 tw-left-0 tw-h-1/2 tw-w-1/2 tw-rounded-bl-full'
          )}
        ></div>
        <div
          className={classNames(
            segmentClasses,
            theme === ThemeEnum.Light ? 'tw-bg-white' : 'tw-bg-grey-10',
            'tw-absolute tw-bottom-0 tw-left-0 tw-h-1/2 tw-w-1/2 tw-rounded-bl-full tw-border-grey-30'
          )}
        ></div>
      </div>
      <span className="tw-sr-only">{loadingLabel}</span>
    </div>
  );
};

export default LoadingSpinner;
