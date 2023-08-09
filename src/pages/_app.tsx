import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ItemProvider } from '@/contexts/ItemContext';
import { DataProvider } from '@/contexts/DataContext';
import { BcdProvider } from '@/contexts/BcdContext';

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <DataProvider>
      <BcdProvider>
        <ItemProvider>
            <Component {...pageProps} />
          </ItemProvider>
      </BcdProvider>
    </DataProvider>
  );
};
