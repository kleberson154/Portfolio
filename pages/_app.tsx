import '@/styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Logo from '../public/images/Logo.svg'
import Image from 'next/image'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/About', current: false },
  { name: 'Projects', href: '/Projects', current: false },
  { name: 'Skills', href: '/Skills', current: false },
  { name: 'Contact', href: '/Contact', current: false }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <AnimatePresence mode="popLayout">
      <Disclosure as="nav" className="bg-background ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-between md:items-stretch md:justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    <Image
                      className="h-5 w-auto pr-2"
                      src={Logo}
                      alt="Your Company"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
                      Kleberson A.
                    </span>
                  </div>
                  <div className=" flex items-center md:hidden">
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
                  <div className="hidden sm:ml-6 md:block">
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
              <Disclosure.Panel className="absolute right-0 z-10 rounded-bl-lg bg-background w-40  md:hidden ">
                <div className="space-y-1 px-2 pb-3 pt-2 border-2 border-primary rounded-l-3xl rounded-br-3xl">
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

      <Component key={pageKey} {...pageProps} />
    </AnimatePresence>
  )
}
