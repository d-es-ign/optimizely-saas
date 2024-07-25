import Button from '../../atoms/Button/Button';
import { ISocialLinks } from '../../models/ISocialLinks';

const SocialLinks = ({ links }: ISocialLinks) => (
  <div className="tw-flex tw-gap-2">
    {links.map(() => (
      <Button/>
    ))}
  </div>
);

export default SocialLinks;
