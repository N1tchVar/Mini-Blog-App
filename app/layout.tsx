import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mini Blog App',
  description: 'Nextjs Blog Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div className='text-center bg-purple-950 p-8 my-6 rounded-md'>
        <Link href="/">
          <h1 className='text-3xl text-purple-600 font-bold'>N1tch's blog</h1>
        </Link>
        <p className='text-slate-300'>Just a simple markdown blog</p>
        <br/>
      </div>
    </header>
  );

  const footer = (
    <footer className='border-t border-purple-600 mt-6 py-6 text-center text-purple-500'>
      <div>
        <p></p> 
      </div>
    </footer>
  )

  return (
    <html lang="en">
      <body className='mx-auto px-2  border-purple-500 max-w-2xl'>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
