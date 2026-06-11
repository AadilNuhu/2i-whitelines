import React from 'react';

// A lightweight mock of framer-motion that falls back to standard React elements.
// This allows compiling and running perfectly without needing network access to download framer-motion.

const mockComponent = (tag: string) => {
  return React.forwardRef(({ children, transition, initial, animate, exit, layout, layoutId, viewport, whileInView, ...props }: any, ref: any) => {
    return React.createElement(tag, { ref, ...props }, children);
  });
};

export const motion = new Proxy({} as any, {
  get: (_target, property: string) => {
    return mockComponent(property);
  }
});

export const AnimatePresence: React.FC<any> = ({ children }) => {
  return <>{children}</>;
};

export default motion;
