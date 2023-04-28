'use client'

import { Provider } from 'react-redux'
import { store } from 'store'
import 'css/global.scss'
import Aside from '@/components/Aside'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Provider store={store}>
          <Aside />
          {children}
        </Provider>
      </body>
    </html>
  )
}