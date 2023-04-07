import React from 'react';

export default function Container({ children }) {
  return <div className="container mx-auto lg:px-8 md:px-3">{children}</div>;
}
