'use client'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // console.error(error)
  }, [error])

  const handlePageRefresh = () => {
    reset()
    location.reload()
  }

  return (
    <div>
      <h2>Something went wrong! Our team is working to return things to normal way of operating</h2>
      <Button
        onClick={handlePageRefresh}
      >
        Reload the page
      </Button>
    </div>
  )
}