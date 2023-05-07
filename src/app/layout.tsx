'use client'

import { Provider } from 'react-redux';
import Aside from '@/components/Aside';
import { store } from 'store';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps){
  return (
    <html lang="pt-br">
      <body>
        <Provider store={store}>
          <Aside />
          {children}
        </Provider>
      </body>
    </html>
  );
};