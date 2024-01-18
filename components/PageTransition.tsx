import React, { forwardRef, useMemo } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition(
  { children, ...rest }: PageTransitionProps,
  ref: PageTransitionRef
) {
  const onTheRight = { x: '100%', opacity: 0 }
  const inTheCenter = { x: 0, opacity: 1 }
  const onTheLeft = { x: '-100%', opacity: 0 }

  const transition = { duration: 0.4, ease: 'easeInOut' }

  return (
    <motion.div
      className="w-full"
      ref={ref}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

export default forwardRef(PageTransition)
