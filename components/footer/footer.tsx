"use client"
import React from 'react'
import { ContactForm } from './contact-form'
import { FacebookIcon } from 'lucide-react'

export const Footer= () => {
  const date = new Date().getFullYear()

  const footerNavs = [
      {
          href: '/about',
          name: 'About'
      },
      {
          href: '/blog',
          name: 'Blog'
      },
      {
          href: 'javascript:void()',
          name: 'Team'
      },
      {
          href: 'javascript:void()',
          name: 'Gallery'
      }
  ]

  return (
      <footer className=" text-pink-200 bg-[url('/images/bgfooter.jpg')] bg-cover
     bg-center px-4 py-5 max-w-screen-xl mx-auto md:px-8 rounded-t-md border-t-[1.5px] m-1 border-neutral-500">
          <div className="max-w-lg sm:mx-auto sm:text-center">
              <img src="/images/logo.png" className="w-32 sm:mx-auto" />
              <p className="leading-relaxed mt-2 text-[15px]">
                 
              </p>
          </div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  footerNavs.map((item, idx) => (
                      <li className=" hover:text-gray-800" key={idx}>
                          <a  href={item.href}>
                              { item.name }
                          </a>
                      </li>
                  ))
              }
          </ul>
          <div className="mt-8 items-center justify-between sm:flex">
              <div className="mt-4 sm:mt-0 text-black">
                  &copy; {date} Africom Media EA All rights reserved.
              </div>
              <div className="mt-6 sm:mt-0 text-black">
                  <ul className="flex items-center space-x-4">
                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="javascript:void()" >
                             <FacebookIcon />
                          </a>
                      </li>

                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="javascript:void()">
                             
                          </a>
                      </li>

                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="javascript:void()">
                           
                          </a>
                      </li>

                      <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                          <a href="javascript:void()">
                            
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <style jsx>{`
              .svg-icon path,
              .svg-icon polygon,
              .svg-icon rect {
                  fill: currentColor;
              }
          `}</style>
      </footer>
  )
}

  