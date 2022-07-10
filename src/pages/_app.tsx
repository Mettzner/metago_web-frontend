import '../../styles/globals.scss'
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../contexts/AuthContext'
import { ThemeProvider } from 'next-themes'

import { Sidebar } from '.././components/Header/'

function MyApp({ Component, pageProps }) {
  return (


    <AuthProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={3000} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
