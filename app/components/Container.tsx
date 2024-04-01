import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Container({ children, style }: ContainerProps) {
  return (
    <div 
      className='max-w-[1920px] mx-auto xl:px-20 md:px-2 px-4'
      style={{ ...style, minHeight: '100vh' }}
    >
      {children}
    </div>
  ); 
}
