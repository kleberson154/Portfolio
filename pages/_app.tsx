import '@/styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/About', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Skills', href: '#', current: false },
  { name: 'Contact', href: '#', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <AnimatePresence initial={false} mode="popLayout">
      <Disclosure as="nav" className="bg-background">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                      Kleberson A.
                    </span>
                  </div>
                  <div className=" flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map(item => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          <span className="text-primary">#</span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-300"
              enterFrom="transform  opacity-0 scale-95"
              enterTo="transform  opacity-100 scale-100"
              leave="transition ease-in-out duration-300"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Disclosure.Panel className="absolute right-0 z-10 rounded-bl-lg bg-background w-60  sm:hidden ">
                <div className="space-y-1 px-2 pb-3 pt-2 ">
                  {navigation.map(item => (
                    <Link href={item.href} className="flex justify-end">
                      <Disclosure.Button
                        key={item.name}
                        className={classNames(
                          item.current
                            ? 'bg-gray-900 text-white'
                            : 'text-secondary hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        <span className="text-primary">#</span>
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>

      {/* <header classNameNameName="bg-background text-white flex justify-around w-screen">
        <div classNameNameName="flex">
          <img src="#" alt="#" />
          <span classNameNameName="self-center whitespace-nowrap text-xl font-semibold text-white">
            Kleberson A.
          </span>
        </div>

      <div classNameNameName="" id="collapseExample" data-te-collapse-item>
          <ul classNameNameName="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                classNameNameName="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <span classNameNameName="text-primary">#</span>Home
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                classNameNameName="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span classNameNameName="text-primary">#</span>About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                classNameNameName="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span classNameNameName="text-primary">#</span>Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                classNameNameName="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span classNameNameName="text-primary">#</span>Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/"
                classNameNameName="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <span classNameNameName="text-primary">#</span>Contact
              </Link>
            </li>
          </ul>
        </div>
      </header> */}

      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  )
}
