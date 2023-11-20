import './globals.css'

export const metadata = {
  title: 'My PortFolio',
  description: 'Hii i am a web developer and am presesnting you my portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
