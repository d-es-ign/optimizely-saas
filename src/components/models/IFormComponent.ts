import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';
import IFormValues from './IFormValues';

export default interface IFormComponent {
  readonly errors?: FieldErrors;
  readonly label?: string;
  readonly requiredErrorMessage?: string;
  readonly register: UseFormRegister<IFormValues>;
  readonly watch?: UseFormWatch<IFormValues>;
  readonly setValue?: UseFormSetValue<IFormValues>;
}
