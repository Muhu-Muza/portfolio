import './globals.css'
import Navbar from "./components/Navbar";

export const metadata = {
  title: 'Muhumuza | Software Engineer',
  description: 'Full-Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
