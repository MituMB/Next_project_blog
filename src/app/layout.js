import Header from '@/components/header/Header'
import './globals.css'
import { Inter,Roboto, Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
// import { SessionProvider } from "next-auth/react"
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const roboto = Roboto({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Recipie Blog App',
  description: 'This blog is about food recipies.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <ThemeProvider>
      <AuthProvider>
        <div className="container">
        <Header/>
        {children}
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}
