import { IIcon } from "../../models/IIcon";
import classNames from "classnames";
import IcoMoon from "react-icomoon";
import iconSet from "./selection.json";

const Icon = ({
  className,
  color,
  colorClassName = "tw-text-inherit",
  name,
  size = "1rem",
}: IIcon) => (
  <IcoMoon
    icon={name}
    size={size}
    color={color}
    iconSet={iconSet}
    removeInlineStyle={true}
    className={classNames(
      "tw-stroke-current tw-inline-block tw-fill-current tw-transition-colors",
      className,
      colorClassName
    )}
  />
);

export default Icon;
