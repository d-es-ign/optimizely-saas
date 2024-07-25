import { vi } from 'vitest';

const { error } = console;

console.error = (...args) => {
  error(...args);
  throw new Error(args.join(' '));
};

const mockedObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

globalThis.scrollTo = vi.fn();
globalThis.ResizeObserver = mockedObserver;
globalThis.IntersectionObserver = mockedObserver;

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: () => {},
});

globalThis.matchMedia = vi.fn().mockReturnValue({
  matches: false,
  media: '',
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});
