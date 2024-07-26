import Button from '../../atoms/Button/Button';
import { ISocialLinks } from '../../models/ISocialLinks';

const SocialLinks = ({ links }: ISocialLinks) => (

  <div className="tw-flex tw-gap-2">
    {links.map(({ target, linkIcon, url, text }) => (
      <Button
        as="link"
        key={text}
        modifier="outline"
        variant="grey30"
        href={url}
        iconName={linkIcon}
        iconSize="1.5rem"
        buttonClasses="!tw-p-0 tw-h-xl tw-w-xl"
        iconClasses="tw-text-2xl"
        target={target}
      />
    ))}
  </div>
);

export default SocialLinks;
