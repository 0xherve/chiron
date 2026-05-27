import { QueryClient } from "@tanstack/react-query";
import { HeadContent, Scripts, createRootRouteWithContext } from '@tanstack/react-router'

import WorkOSProvider from '../integrations/workos/provider'

import appCss from '../styles.css?url'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
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
        title: 'Chiron - AI powered writing feedback',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap',
      },
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='dark'||(t==null&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark')})()`,
          }}
        />
      </head>
      <body>
        <WorkOSProvider>
          {children}
        </WorkOSProvider>
        <Scripts />
      </body>
    </html>
  )
}
