import posthog from 'posthog-js'
import { useEffect } from 'react'
import { useRouterState } from '@tanstack/react-router'

export default function PostHogPageView() {
  const location = useRouterState({ select: (s) => s.location })

  useEffect(() => {
    posthog.capture('$pageview', { $current_url: window.location.href })
  }, [location.pathname, location.search])

  return null
}
