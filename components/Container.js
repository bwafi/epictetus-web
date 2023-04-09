import React from 'react';

export default function Container({ children }) {
  return <div className="container mx-auto lg:px-10 md:px-10 px-6">{children}</div>;
}
