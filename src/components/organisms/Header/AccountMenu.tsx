import Icon from '../../atoms/Icon/Icon';
import Text from '../../atoms/Text/Text';
import { IAccountMenu } from '../../models/IHeader';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export interface Props extends IAccountMenu {
  readonly isOpen: boolean;
  readonly accountLabel: string;
  readonly menuLabel: string;
}

const AccountMenu = ({
  isOpen,
  accountLabel,
  menuLabel,
  links,
  dashboardLink,
  logOutLink,
}: PropsWithChildren<Props>) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        role="dialog"
        id={`${accountLabel}-${menuLabel}`}
        className="tw-overflow-hidden tw-border tw-border-grey-30 tw-bg-white tw-shadow-md md:tw-rounded"
        transition={{ delay: 0.1, duration: 0.5, ease: 'easeInOut' }}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
      >
        <ul>
          <li className="tw-border-b tw-border-grey-30">
            <a
              href={dashboardLink.url}
              className="tw-flex tw-items-center tw-gap-2 tw-px-xs tw-py-[14px]"
              target={dashboardLink.target}
            >
              <Icon name="home" />
              <Text variant="body-small">{dashboardLink.text}</Text>
            </a>
          </li>
          {!!links.length && links.map((link) => (
            <li key={link.text} className="tw-block tw-px-xs tw-py-[14px]">
              <a href={link.url} target={link.target}>
                <Text variant="body-small">{link.text}</Text>
              </a>
            </li>
          ))}
          <li>
            <a
              href={logOutLink.url}
              target={logOutLink.target}
              className="tw-flex tw-items-center tw-gap-2 tw-px-xs tw-py-[14px]"
            >
              <Icon name="log-out" />
              <Text variant="body-small">{logOutLink.text}</Text>
            </a>
          </li>
        </ul>
      </motion.div>
    )}
  </AnimatePresence>
);

export default AccountMenu;
