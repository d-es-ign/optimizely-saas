import Icon from '@/components/atoms/Icon/Icon';
import Text from '@/components/atoms/Text/Text';
import { ErrorMessage } from '@hookform/error-message';
import { IFilter } from '@/components/models/IFilterGroup';
import IFormComponent from '@/components/models/IFormComponent';
import classNames from 'classnames';
import { useSelect } from 'downshift';
import { motion } from 'framer-motion';
import { ChangeEvent, InputHTMLAttributes } from 'react';

export interface ISelect
  extends InputHTMLAttributes<HTMLInputElement>,
    IFormComponent {
  readonly displayLabel: boolean;
  readonly options: IFilter[];
  readonly placeholder: string;
  readonly name: string;
  readonly selectedItem?: IFilter | null;
  readonly onSelectedItemChange?: (newSelectedItem: IFilter | null) => void;
}

const itemToString = (item: IFilter | null) => (item ? item.label : '');

const Select = ({
  disabled,
  errors,
  label = '',
  name,
  onChange,
  options,
  placeholder,
  displayLabel,
  register,
  requiredErrorMessage,
  setValue,
  selectedItem: externalSelectedItem,
  onSelectedItemChange,
}: ISelect) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items: options,
    itemToString,
    selectedItem: externalSelectedItem,
    onSelectedItemChange: ({ selectedItem }) => {
      setValue?.(name, String(selectedItem?.id ?? ''), {
        shouldValidate: true,
      });
      onChange?.({
        target: { value: String(selectedItem?.id ?? '') },
      } as ChangeEvent<HTMLInputElement>);

      if (selectedItem) onSelectedItemChange?.(selectedItem);
    },
  });

  return (
    <div className="tw-relative tw-min-w-[224px]">
      <div>
        <input
          className="tw-peer tw-hidden"
          disabled={disabled}
          {...register(name, { required: requiredErrorMessage })}
        />
        <label
          {...getLabelProps()}
          className={classNames(
            { 'tw-sr-only': !displayLabel },
            'tw-mb-xxs tw-block tw-font-sans tw-text-xs tw-text-grey-70 peer-disabled:tw-text-grey-40'
          )}
        >
          {label ?? placeholder}
        </label>
        <div
          className="tw-flex tw-w-full tw-cursor-pointer tw-items-center tw-justify-between tw-rounded tw-border tw-border-grey-60 tw-bg-transparent tw-px-xs tw-py-4 tw-text-sm hover:tw-border-black peer-disabled:tw-pointer-events-none peer-disabled:tw-border-grey-20 peer-disabled:tw-text-grey-40"
          {...getToggleButtonProps()}
        >
          <span>{selectedItem ? selectedItem.label : placeholder}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon name="chevron-down" />
          </motion.div>
        </div>
      </div>
      <ul
        className={classNames(
          !isOpen && 'tw-hidden',
          'tw-absolute tw-z-10 tw-mt-2 tw-max-h-52 tw-w-full tw-overflow-y-auto tw-rounded tw-border tw-border-grey-30 tw-bg-white tw-p-0 tw-shadow-md'
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          options.map((item, index) => (
            <li
              key={item.id}
              className={classNames(`tw-px-xs tw-py-[14px]`, {
                'tw-bg-grey-10':
                  highlightedIndex === index && selectedItem?.id !== item.id,
                'tw-bg-grey-20': selectedItem?.id === item.id,
              })}
              {...getItemProps({ item, index })}
            >
              <Text variant="body-small">{item.label}</Text>
            </li>
          ))}
      </ul>
      {requiredErrorMessage && errors && (
        <ErrorMessage
          errors={errors}
          name="freetext"
          render={({ message }) => (
            <Text variant="label-12" className="tw-text-red">
              {message}
            </Text>
          )}
        />
      )}
    </div>
  );
};

export default Select;
