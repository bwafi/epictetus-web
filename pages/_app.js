import '@/styles/globals.css';
import { Patrick_Hand } from 'next/font/google';

const patrick = Patrick_Hand({ weight: ['400'], subsets: ['latin'], variable: '--font-patrick' });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${patrick.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
