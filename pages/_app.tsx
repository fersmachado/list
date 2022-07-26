import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'
import { defaultTheme } from '../src/styled/theme'



function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={defaultTheme}><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
