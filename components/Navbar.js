import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Container from './Container';
import Link from 'next/link';

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const [offCanvas, setOffCanvas] = useState(false);
  const [search, setSearch] = useState(false);

  const dropDownList = [
    { text: 'Internet', href: '#' },
    { text: 'Books', href: '#' },
    { text: 'Open Source', href: '#' },
  ];

  return (
    <nav className="py-9">
      <Container>
        <div className="flex text-white items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffCanvas(!offCanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <Link href={'/'} className="lg:w-2/12 w-6/12">
            <div className="flex items-center text-lg cursor-pointer lg:justify-start  justify-center">
              <div className="w-9 h-9 mr-2 bg-gray-500 text-lg rounded flex items-center justify-center shadow-2xl">
                E
              </div>
              Epictetus
            </div>
          </Link>
          <div className="w-3/12 lg:hidden text-right">
            <button
              onClick={() => {
                setSearch(!search);
              }}>
              <svg
                className="inline-block"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-7/12 w-full lg:bg-none lg:static  bg-gradient-to-b from-gray-600 to-gray-900 h-full p-10 top-0 fixed transition-all duration-300 ease-in-out lg:h-auto lg:p-0 
            ${offCanvas ? 'left-0' : '-left-full'}`}>
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => {
                setOffCanvas(false);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="lg:space-x-14 space-y-6 flex lg:items-center flex-col lg:flex-row lg:space-y-0">
              <li>
                <Link href="/posts" className="hover:underline">
                  UI Design
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Front-end
                </Link>
              </li>
              <li>
                <Link href="/posts" className="hover:underline">
                  Back-end
                </Link>
              </li>
              <li className="relative">
                <a className="hover:underline cursor-pointer flex items-center" onClick={() => setDropDown(!dropDown)}>
                  Lainnya
                  <Image src="/svg/chevron-down.svg" width={15} height={15} alt="down" className="ml-2" />
                </a>
                {dropDown && (
                  <ul className="absolute w-[200px] bg-gray-800 mt-3 shadow-xl rounded-lg">
                    {dropDownList.map(({ text, href }) => (
                      <li key={text} className=" border-b border-white/5 last:border-0">
                        <a href={href} className=" flex py-3 px-6 hover:bg-gray-700/60">
                          {text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div
            className={`lg:w-3/12 w-full lg:px-0 lg:static absolute px-16 left-0 transition-transform items-center flex justify-center lg:translate-y-0 ${
              search ? 'top-13' : '-translate-y-20'
            }`}>
            <input
              type="text"
              className="lg:w-full absolute w-11/12 bg-gray-700 py-2 pl-10 pr-10 lg:pr-5 bg-no-repeat bg-[1rem] bg-search rounded-xl lg:rounded-full "
              placeholder="Search"
            />
            <button
              className="absolute lg:hidden -top-3 md:right-11 right-6"
              onClick={() => {
                setSearch(false);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
