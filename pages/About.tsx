import React from 'react'
import PageTransition from '@/components/PageTransition'
type IndexPageProps = {}
type IndexPageRef = React.ForwardedRef<HTMLDivElement>

export default function About(props: IndexPageProps, ref: IndexPageRef) {
  return (
    <div>
      <PageTransition ref={ref}>
        <div>About</div>
      </PageTransition>
    </div>
  )
}
