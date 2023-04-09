import Link from 'next/link';
import React from 'react';

export default function PostMetaTitle({ category, date, title, center }) {
  return (
    <>
      <div className="flex items-center space-x-4 text-white/60 mt-4">
        <div>{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`text-2xl mt-4 text-white ${center ? 'text-center' : ''}`}>
        <Link href={'/detail'}>{title}</Link>
      </h2>
    </>
  );
}
