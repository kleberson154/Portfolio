import '@/styles/globals.css'

import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from '@/src/components/Header'
config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </>
  )
}
