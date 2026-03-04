'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'

// Suppress React warning: "disableTransition" prop on DOM element
if (typeof window !== 'undefined') {
  const originalError = console.error
  console.error = (...args: unknown[]) => {
    const message = args.map(String).join(' ')
    if (message.includes('disableTransition')) {
      return
    }
    originalError.apply(console, args)
  }
}

export default function StudioClient() {
  return <NextStudio config={config} />
}
