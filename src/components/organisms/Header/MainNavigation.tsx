import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import { ILink } from 'models/ILink';
import { INavigationItem } from 'models/INavigationItem';
import classNames from 'classnames';
import SubNavigation from './SubNavigation';
import SiteEnum from '../../models/enums/SiteEnum';

interface Props {
  readonly callback?: (
    text: string,
    links?: ILink[],
    highlightedLink?: ILink
  ) => void;
  readonly activeNavItem: string | null;
  readonly isMobile?: boolean;
  readonly items: INavigationItem[];
  readonly type?: 'primary' | 'secondary';
}

const MainNavigation = ({
  activeNavItem,
  callback,
  isMobile,
  items = [],
  type = 'primary',
}: Props) => {
  return (
    <ul>
      {items.map(
        ({ link: { text, url, target }, children, highlightedLink }) => {
          const hasSubNav = !!children?.length;

          const content = (
            <>
              <Text
                variant={
                  type === 'primary' ? 'heading-21-light' : 'body-14-semibold'
                }
              >
                {text}
              </Text>
              {hasSubNav && (
                <Icon
                  name="chevron-right"
                  className={classNames(
                    type === 'primary' ? '' : 'tw-text-[10px]',
                    'group-hover:tw-fill-grey-70'
                  )}
                />
              )}
            </>
          );

          const classes = `tw-group tw-w-full tw-flex tw-justify-between tw-items-center tw-p-xxs tw-px-[18px]
         tw-border-b tw-border-grey-20 tw-text-grey-100 hover:tw-text-grey-70 tw-rounded hover:tw-bg-grey-20 md:tw-px-xxs md:tw-border-none`;

          const controls = {
            id: `nav-title-${text}`,
            'aria-owns': `nav-submenu-${text}`,
            'aria-controls': `nav-submenu-${text}`,
            onMouseEnter: () => {
              callback?.(text, children, highlightedLink);
            },
            onTouchStart: () => {
              callback?.(text, children, highlightedLink);
            },
            onFocus: () => {
              callback?.(text, children, highlightedLink);
            },
          };

          // Render links as buttons on mobile to access sub nav
          if (hasSubNav && isMobile) {
            return (
              <li key={text}>
                <button type="button" {...controls} className={classes}>
                  {content}
                </button>
              </li>
            );
          }

          return (
            <li key={text}>
              <a
                href={url}
                target={target}
                {...(isMobile ? {} : controls)}
                className={classes}
              >
                {content}
              </a>
              {activeNavItem === text && (
                <div className="tw-absolute tw-bottom-0 tw-left-full tw-top-0 tw-w-full tw-overflow-y-auto tw-pt-xl">
                  <SubNavigation
                    site={SiteEnum.B2B}
                    items={{ links: children, highlightedLink }}
                    parent={text}
                    onClickCallback={() => {
                      callback?.(text, children, highlightedLink);
                    }}
                  />
                </div>
              )}
            </li>
          );
        }
      )}
    </ul>
  );
};

export default MainNavigation;
