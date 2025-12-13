import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

export const ThemeContext = React.createContext({ theme: 'dark', toggle: () => {} })

function ThemeProvider({ children }){
  const [theme, setTheme] = useState('dark')
  useEffect(()=>{
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if(stored){ setTheme(stored); document.documentElement.classList.add(stored) }
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const init = prefersDark ? 'dark' : 'light'
      setTheme(init); document.documentElement.classList.add(init)
    }
  },[])
  const toggle = ()=>{ const next = theme==='dark'?'light':'dark'; setTheme(next); document.documentElement.classList.remove('light','dark'); document.documentElement.classList.add(next); localStorage.setItem('theme', next) }
  return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}

export default function App({ Component, pageProps, router }){
  return (
    <ThemeProvider>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </ThemeProvider>
  )
}