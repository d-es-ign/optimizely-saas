"use client"
import { useEffect, useState } from 'react';
import Backdrop from '../../atoms/Backdrop/Backdrop';
import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import { IHeader } from '../../models/IHeader';
import bodyScrollLock from '../../../utility/helpers/bodyScrollLock';
import useMediaQuery from '../../../utility/hooks/useMediaQuery';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import { AnimatePresence, useReducedMotion } from 'framer-motion';
import AccountMenu from './AccountMenu';
import Navigation from './Navigation';

interface Props extends IHeader {
  readonly animation: boolean;
}

const HeaderNavigation = ({
  accountLabel,
  accountMenu,
  animation = true,
  featuredContentImage,
  featuredContentLink,
  featuredContentText,
  featuredContentTitle,
  logo,
  logoAlt,
  menuLabel,
  navigation,
  quickLinks,
  secondaryLinks,
  site,
  title,
}: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useMediaQuery(752);

  const showAnimations = animation && !shouldReduceMotion;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowAccountDropdown(false);
  };

  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
    setShowMenu(false);
  };

  const handleClose = () => {
    setShowAccountDropdown(false);
    setShowMenu(false);
  };

  useEffect(() => {
    const dialogOpen = showMenu || showAccountDropdown;

    bodyScrollLock(dialogOpen);
    setShowBackdrop(dialogOpen);
  }, [showMenu, showAccountDropdown]);

  const navigationProps = {
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
  };

  return (
    <>
      <header
        className={classNames(
          'tw-sticky tw-left-0 tw-top-0 tw-z-50 tw-flex tw-h-[56px] tw-w-screen tw-border-b tw-bg-grey-10 tw-py-3 tw-text-grey-100 tw-transition-transform tw-duration-150 md:tw-h-2xl dark:tw-bg-white',
          showMenu || isAnimating ? 'tw-border-grey-20' : 'tw-border-grey-10'
        )}
        id="header"
      >
        <div className="tw-container tw-flex tw-w-full tw-flex-row">
          <div className="tw-grid tw-w-full tw-grid-cols-5 tw-gap-3xs md:tw-grid-cols-3 md:tw-gap-xs">
            <div className="tw-flex tw-items-center">
              <button
                type="button"
                className="tw-flex tw-flex-row tw-items-center"
                onClick={toggleMenu}
                aria-expanded={showMenu}
                aria-controls="navigation"
              >
                <Icon
                  name={showMenu ? 'cross' : 'menu'}
                  className="tw-text-2xl"
                  size="1.5rem"
                />
                <Text
                  variant="body-14-semibold"
                  className="tw-ml-2.5 tw-hidden md:tw-inline-block"
                >
                  {menuLabel}
                </Text>
              </button>
            </div>
            <div className="tw-col-span-3 tw-flex tw-items-center tw-justify-center md:tw-col-span-1">
              {logo && (
                <a href="/home">
                  <img
                    src={logo}
                    alt={logoAlt}
                    loading="eager"
                    className="tw-h-[28px] tw-w-[112px] md:tw-h-lg md:tw-w-[140px]"
                  />
                </a>
              )}
            </div>
            <div className="tw-flex tw-items-center tw-justify-end">
              <div className="md:tw-relative">
                <button
                  type="button"
                  onClick={toggleAccountDropdown}
                  aria-label={accountLabel}
                  aria-expanded={showAccountDropdown}
                  aria-controls={`${accountLabel}-${menuLabel}`}
                >
                  <Icon name="avatar" className="tw-text-2xl" size="1.5rem" />
                </button>
                <div className="tw-absolute tw-left-0 tw-right-0 tw-top-full md:tw-left-auto md:tw-right-0 md:tw-top-[calc(100%+8px)] md:tw-min-w-[224px]">
                  <AccountMenu
                    {...accountMenu}
                    isOpen={showAccountDropdown}
                    accountLabel={accountLabel}
                    menuLabel={menuLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {showMenu && (
          <FocusTrap
            focusTrapOptions={{
              preventScroll: true,
              allowOutsideClick: true,
              initialFocus: false,
            }}
          >
            <Navigation {...navigationProps} />
          </FocusTrap>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showBackdrop && <Backdrop onCloseCallback={handleClose} />}
      </AnimatePresence>
    </>
  );
};

export default HeaderNavigation;
