import React from 'react';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const dropDownList = [
    { text: 'Internet', href: '#' },
    { text: 'Books', href: '#' },
    { text: 'Open Source', href: '#' },
  ];

  return (
    <nav className="py-9">
      <div className="container mx-auto">
        <div className="flex text-white items-center">
          <div className="w-2/12 flex items-center text-lg cursor-pointer">
            <div className="w-9 h-9 mr-2 bg-gray-500 text-lg rounded flex items-center justify-center shadow-2xl">
              E
            </div>
            Epictetus
          </div>
          <div className="w-7/12">
            <ul className="space-x-14 flex items-center">
              <li>
                <a href="#" className="hover:underline">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Front-end
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Back-end
                </a>
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
          <div className="w-3/12 relative flex items-center">
            <input
              type="text"
              className="w-10/12 bg-gray-700 py-2 pl-10 pr-5 rounded-full absolute"
              placeholder="Search"
            />
            <Image src="/svg/search.svg" width={15} height={15} alt="svg icon" className="absolute left-4" />
          </div>
        </div>
      </div>
    </nav>
  );
}
