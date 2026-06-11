import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import PostHogProvider from '../integrations/posthog/provider'

import ClerkProvider from '../integrations/clerk/provider'

import appCss from '../styles.css?url'
import Navbar from '#/components/Navbar'
import Crosshair from '#/components/Crosshair'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Skild - The Registry for Agentic Intelligence',
      },
      {
        name: 'description',
        content: 'Skild is a registry for agentic intelligence, providing a platform for sharing and discovering intelligent agents.',
      }
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className='font-sans antialiased wrap-anywhere'>
        <PostHogProvider>
          <ClerkProvider>
            <div id="root-layout">
              <header>
                <div className="frame">
            <Navbar />
            <Crosshair />
            <Crosshair />
                </div>
              </header>
              <main>
                <div className="frame">
            {children}
                </div>
              </main>
            </div>
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
              ]}
            />
          </ClerkProvider>
        </PostHogProvider>
        <Scripts />
      </body>
    </html>
  )
}
