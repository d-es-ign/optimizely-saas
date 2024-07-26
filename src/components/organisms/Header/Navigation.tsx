import ConditionalWrapper from '../../atoms/ConditionalWrapper/ConditionalWrapper';
import Icon from '../../atoms/Icon/Icon';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import { ILink } from '../../models/ILink';
import { INavigation, ISubNavigation } from '../../models/INavigation';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ForwardedRef, MouseEventHandler, forwardRef, useState } from 'react';
import MainNavigation from './MainNavigation';
import SubNavigation from './SubNavigation';

interface Props extends INavigation {
  readonly countrySelectCallback?: MouseEventHandler<HTMLButtonElement>;
  readonly setIsAnimating: (value: boolean) => void;
  readonly showAnimations: boolean;
  readonly isMobile: boolean;
}

const Navigation = forwardRef(
  (
    {
      featuredContentImage,
      featuredContentLink,
      featuredContentText,
      featuredContentTitle,
      navigation,
      quickLinks,
      secondaryLinks,
      setIsAnimating,
      showAnimations,
      title,
      site,
      isMobile,
    }: Props,
    ref
  ) => {
    const [activeSubNav, setActiveSubNav] = useState<ISubNavigation | null>(
      null
    );
    const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

    const handleNavSelection = (
      text: string,
      children?: ILink[],
      highlightedLink?: ILink
    ) => {
      text ? setActiveNavItem(text) : setActiveNavItem(null);
      children?.length || highlightedLink
        ? setActiveSubNav({ links: children, highlightedLink })
        : setActiveSubNav(null);
    };

    const slideDown = {
      animate: {
        y: 0,
      },
      exit: {
        y: '-100%',
      },
    };

    const slideLeft = {
      animate: {
        x: 0,
      },
      exit: {
        x: '-100%',
      },
    };

    const slideRight = {
      animate: {
        x: 0,
      },
      exit: {
        x: '100%',
      },
    };

    const noAnimation = {
      animate: {},
      exit: {},
    };

    const transition = {
      delay: 0.15,
      duration: 1.1,
      ease: [0.74, 0, 0.19, 1.02],
    };

    return (
      <motion.nav
        ref={ref as ForwardedRef<HTMLDivElement>}
        variants={showAnimations ? slideDown : noAnimation}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        initial="exit"
        animate="animate"
        exit="exit"
        transition={transition}
        id="navigation"
        key="navigation"
        role="navigation"
        className="tw-absolute tw-top-[56px] tw-z-40 tw-h-full tw-max-h-[calc(100dvh-56px)]  tw-w-full tw-overflow-y-auto tw-bg-grey-10 md:tw-top-[64px] md:tw-h-auto md:tw-max-h-[calc(100dvh-64px)] md:tw-overflow-y-hidden  md:tw-pb-xl"
      >
        <div className="tw-border-b tw-border-grey-20 tw-pb-5 tw-pt-xs">
          <Text variant="heading-28" className="tw-container tw-text-black">
            {title}
          </Text>
        </div>
        <div
          className={classNames(
            'tw-relative tw-h-auto tw-w-full md:tw-container'
          )}
        >
          <div className="tw-grid tw-w-full tw-grid-cols-1 tw-divide-grey-20 md:tw-row-span-3 md:tw-grid-cols-3 ">
            {/* Main Nav/ First Column */}
            <ConditionalWrapper
              condition={isMobile}
              wrapper={(children) => (
                <AnimatePresence initial={false}>
                  {!activeNavItem && !activeSubNav && (
                    <motion.div
                      variants={showAnimations ? slideLeft : noAnimation}
                      initial="exit"
                      animate="animate"
                      exit="exit"
                      transition={transition}
                      key="mainNav"
                    >
                      {children}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            >
              <div className="tw-relative">
                <div className="tw-flex tw-flex-col tw-justify-between tw-gap-[42px] tw-overflow-y-auto tw-overflow-x-visible tw-pt-xl md:tw-max-h-[calc(100dvh-136px)] md:tw-pr-xs">
                  {/* Primary Links */}
                  <MainNavigation
                    activeNavItem={activeNavItem}
                    items={navigation}
                    type="primary"
                    callback={handleNavSelection}
                    isMobile={isMobile}
                  />
                  <div>
                    {/* Sub Navigation Links */}
                    {!!secondaryLinks.length && (
                      <ConditionalWrapper
                        condition={isMobile}
                        wrapper={(children) => (
                          <AnimatePresence initial={false}>
                            {!activeNavItem && !activeSubNav && (
                              <motion.div
                                variants={
                                  showAnimations ? slideLeft : noAnimation
                                }
                                initial="exit"
                                animate="animate"
                                exit="exit"
                                transition={transition}
                                key="secondaryLinks"
                              >
                                {children}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      >
                        <div className="tw-flex tw-w-full tw-flex-col tw-pb-xs">
                          {secondaryLinks.map(({ text, url, target, link }) => (
                            <a
                              key={text}
                              href={url || link?.default}
                              target={target}
                              className="tw-flex tw-items-center tw-gap-[5px] tw-border-t tw-border-grey-20 tw-px-[18px] tw-py-xxs md:tw-border-none md:tw-px-xxs"
                            >
                              <Text
                                variant="body-14-semibold"
                                className="tw-text-grey-100"
                              >
                                {text}
                              </Text>
                              {target === '_blank' && (
                                <Icon
                                  name="external-link"
                                  className="tw-text-[18px] tw-text-grey-100"
                                />
                              )}
                            </a>
                          ))}
                        </div>
                      </ConditionalWrapper>
                    )}

                    {/* Bottom Section */}
                    {!!quickLinks.length && (
                      <ConditionalWrapper
                        condition={isMobile}
                        wrapper={(children) => (
                          <AnimatePresence initial={false}>
                            {!activeNavItem && !activeSubNav && (
                              <motion.div
                                variants={
                                  showAnimations ? slideLeft : noAnimation
                                }
                                initial="exit"
                                animate="animate"
                                exit="exit"
                                transition={transition}
                                key="quickLinks"
                              >
                                {children}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      >
                        <div className="tw-flex tw-flex-col tw-border-0 tw-border-grey-20 tw-py-xs md:tw-border-t">
                          {quickLinks.map(({ text, url, target }) => (
                            <a
                              key={text}
                              href={url}
                              target={target}
                              className="tw-flex tw-items-center tw-gap-[5px] tw-border-t tw-border-grey-20 tw-px-[18px] tw-py-xxs md:tw-border-none md:tw-px-xxs"
                            >
                              <Text
                                variant="body-14-semibold"
                                className="tw-text-grey-100"
                              >
                                {text}
                              </Text>
                              {target === '_blank' && (
                                <Icon
                                  name="external-link"
                                  className="tw-text-[18px] tw-text-grey-100"
                                />
                              )}
                            </a>
                          ))}
                        </div>
                      </ConditionalWrapper>
                    )}
                  </div>
                </div>
              </div>
            </ConditionalWrapper>

            {/* Mobile Sub Nav */}

            <AnimatePresence>
              {isMobile && activeNavItem && activeSubNav && (
                <motion.div
                  variants={showAnimations ? slideRight : noAnimation}
                  initial="exit"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  key="subNav"
                  className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-bg-grey-10"
                >
                  <SubNavigation
                    site={site}
                    showAnimations={showAnimations}
                    items={activeSubNav}
                    parent={activeNavItem}
                    highlightedLink={activeSubNav.highlightedLink}
                    onClickCallback={() => {
                      setActiveNavItem(null);
                      setActiveSubNav(null);
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* For grid spacing and borders */}
            <div className="tw-my-xl tw-border-x tw-border-grey-20 max-md:tw-hidden" />

            {/* Featured Content/Third Column Desktop */}
            <div className="tw-hidden tw-max-h-[calc(100dvh-136px)] tw-overflow-auto tw-pl-xs md:tw-flex md:tw-items-start md:tw-pt-xl">
              <a
                href={featuredContentLink.url}
                target={featuredContentLink.target}
                className="tw-flex tw-flex-col tw-gap-xs"
              >
                {featuredContentImage && <Image image={featuredContentImage} />}
                <Text
                  variant="sub-headline"
                  className="tw-text-xl tw-font-light tw-text-grey-100"
                >
                  {featuredContentTitle}
                </Text>
                <Text
                  variant="body"
                  className="tw-text-sm tw-font-light tw-text-grey-100"
                >
                  {featuredContentText}
                </Text>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    );
  }
);
Navigation.displayName = 'Navigation';

export default Navigation;
