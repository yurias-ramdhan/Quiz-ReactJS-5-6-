import React from 'react';
import clsx from 'clsx';

enum HeaderVariant {
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
}

interface HeaderProps {
  variant?: keyof typeof HeaderVariant;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children, variant = 'h1' }) => {
  return (
    <div
      className={clsx('text-[0px]', { 'text-[78px]': variant === 'h1', 'text-[62px]': variant === 'h2', 'text-[48px]': variant === 'h3', 'text-[32px]': variant === 'h4', 'text-[24px]': variant === 'h5', 'text-[16px]': variant === 'h6' })}
    >
      {children}
    </div>
  );
};

export default Header;
