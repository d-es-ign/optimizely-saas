// TODO: extract this list from the selection json so we don't need to manage this manually

export type IconName =
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-small-down'
  | 'arrow-small-left'
  | 'arrow-small-right'
  | 'arrow-small-up'
  | 'avatar'
  | 'bacteria'
  | 'brochure'
  | 'calender'
  | 'checkmark'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'colour'
  | 'compare'
  | 'contamination'
  | 'coverage'
  | 'cross'
  | 'dealer'
  | 'decrease'
  | 'download'
  | 'enlarge'
  | 'expand'
  | 'external-link'
  | 'facebook'
  | 'fail'
  | 'filter'
  | 'find'
  | 'finish'
  | 'folder-open'
  | 'folder'
  | 'globe'
  | 'heart-activated'
  | 'heart'
  | 'home'
  | 'house'
  | 'information'
  | 'instagram'
  | 'integrity'
  | 'large-grid'
  | 'link'
  | 'linkedin'
  | 'location'
  | 'log-out'
  | 'magnifier'
  | 'mail'
  | 'menu'
  | 'minimise'
  | 'minus'
  | 'more-horizontal'
  | 'no-result'
  | 'notification'
  | 'office'
  | 'paint'
  | 'pause'
  | 'phone'
  | 'pinterest'
  | 'play-button'
  | 'play'
  | 'plus'
  | 'question'
  | 'report'
  | 'settings'
  | 'share'
  | 'shopping-cart'
  | 'small-grid'
  | 'star'
  | 'substances'
  | 'success'
  | 'thermal'
  | 'twitter'
  | 'water'
  | 'youtube';

const enum IconSizeEnum {
  xs = '.5rem',
  sm = '.75rem',
  md = '1rem',
  lg = '1.5rem',
  xl = '1.75rem',
}

export interface IIcon {
  readonly className?: string;
  readonly color?: string;
  readonly colorClassName?: string;
  readonly name: IconName;
  readonly size?: IconSizeEnum | number | string;
}
