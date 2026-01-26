'use client'

import dynamic from 'next/dynamic'
import { lazy, Suspense } from 'react'

// Optimized loading component
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  )
}

// Lazy load heavy components
export const LazyImage = dynamic(() => import('next/image'), {
  loading: () => <div className="bg-gray-200 animate-pulse rounded" />,
  ssr: false,
})

// Intersection Observer for lazy loading sections
export function LazySection({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  )
}

// Optimize third-party scripts
export function OptimizedScript({ src, strategy = 'lazyOnload' }: { src: string, strategy?: string }) {
  return (
    <script
      src={src}
      defer
      async
      data-strategy={strategy}
    />
  )
}