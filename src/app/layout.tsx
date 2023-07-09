import { Open_Sans } from 'next/font/google';
import './styles/global.css';

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'CBS Sports',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
