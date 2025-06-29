import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    button: 'button',
    span: 'span',
    a: 'a',
  },
  AnimatePresence: ({ children }: any) => children,
}));
