import { Html, Head, Main, NextScript } from 'next/document'

// TODO: when migrating to the app directory, this can be done at the root layout.tsx file (a custom document component is no longer needed)
export default function Document() {
  return (
    <Html className='h-full bg-gray-50'>
      <Head />
      <body className='h-full overflow-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}