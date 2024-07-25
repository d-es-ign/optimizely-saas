import '@testing-library/jest-dom';
import {
  render as rtlRender,
  type RenderOptions,
} from '@testing-library/react';
import { type PropsWithChildren, type ReactElement } from 'react';

export const AllTheProviders = ({
  children,
}: PropsWithChildren<Record<never, unknown>>) => <>{children}</>;

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
// Renaming custom render function to avoid conflict
export { customRender as rtlRender };
