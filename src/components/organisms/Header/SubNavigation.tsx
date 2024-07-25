import Cta from '../../atoms/Cta/Cta';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import { ILink } from '../../models/ILink';
import { ISubNavigation } from '../../models/INavigation';
import SiteEnum from '../../models/enums/SiteEnum';
import { AnimatePresence, motion } from 'framer-motion';
import { MouseEventHandler } from 'react';

interface Props {
  readonly site: SiteEnum;
  readonly items?: ISubNavigation;
  readonly highlightedLink?: ILink;
  readonly onClickCallback?: MouseEventHandler<HTMLButtonElement>;
  readonly parent: string | null;
  readonly showAnimations?: boolean;
}

const SubNavigation = ({
  site,
  items = { links: [] },
  parent,
  onClickCallback,
  showAnimations,
}: Props) => {
  const { links, highlightedLink } = items;
  const fadeInRight = showAnimations
    ? {
        exit: { opacity: 0, x: -20 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            ease: 'easeInOut',
            duration: 0.3,
          },
        },
      }
    : {
        exit: {},
        animate: {},
      };

  return (
    <div
      key="subNavigation"
      className="tw-flex tw-h-full tw-w-full tw-flex-col tw-gap-xxs tw-py-2.5 md:tw-p-0 md:tw-px-xs"
      role="group"
      id={`nav-submenu-${parent}`}
      aria-labelledby={`nav-title-${parent}`}
    >
      <div className="md:tw-hidden">
        <button
          type="button"
          onClick={onClickCallback}
          className="tw-mb-xs tw-flex tw-w-full tw-items-center tw-gap-[5px] tw-border-b tw-border-grey-20 tw-px-[18px] tw-py-xxs tw-text-grey-100"
        >
          <Icon name="chevron-left" />
          {parent && (
            <Text variant="body" className="tw-text-xl tw-font-light">
              {parent}
            </Text>
          )}
        </button>
      </div>
      <ul className="tw-flex tw-flex-col tw-gap-3 md:tw-pb-lg">
        <AnimatePresence>
          {links &&
            links.map(({ text, url, target }) => (
              <motion.li
                key={text}
                variants={fadeInRight}
                initial="exit"
                animate="animate"
                exit="exit"
                className="tw-px-5"
              >
                <a href={url} target={target}>
                  <Text
                    variant="body"
                    className="tw-text-sm tw-text-grey-100 hover:tw-text-grey-50"
                  >
                    {text}
                  </Text>
                </a>
              </motion.li>
            ))}
          {highlightedLink && (
            <motion.li className="tw-px-5 tw-pt-3">
              <Cta site={site} {...highlightedLink} enableDarkMode={false} />
            </motion.li>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default SubNavigation;
