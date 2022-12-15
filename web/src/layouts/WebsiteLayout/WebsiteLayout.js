import React, { useState, useEffect } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'

import logoactivconseils from './logoactivconseils.jpg'

const WebsiteLayout = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <header className="flex w-screen flex-row items-center justify-between bg-black pt-8 pb-2 pl-2 pr-4 text-white">
          <Link to={routes.home()}>
            <div>
              <img
                className="rounded-full"
                src={logoactivconseils}
                // src="https://unsplash.com/photos/PonPBrdbiyg"
                alt="logo pic"
                width="70"
                height="70"
              />
            </div>
          </Link>

          <button
            className='bg-white text-black font-bold p-1 rounded-3xl'
            onClick={handleThemeSwitch}
          >
            DM
          </button>

          <ul className="flex flex-row items-end justify-end gap-4 text-xs text-yellow-400">
            <li
            // className='solid border border-green-500'
            >
              <Link className="" to={routes.apropos()}>
                A propos
              </Link>
            </li>
            <li>
              <Link to={routes.mesprestas()}>Mes Prestations</Link>
            </li>
            <li>
              <Link to={routes.blog()}>Actu Insertion</Link>
            </li>
          </ul>
        </header>

        <main className="flex h-screen w-screen flex-col items-center justify-center">
          {children}
        </main>

        <div className="flex w-screen flex-col">
          <footer className="w-screen bg-black pb-14 pt-10 text-yellow-400">
            <ul>
              <li className="text-center">
                Espace pour le texte pour de bas de page
              </li>
            </ul>
          </footer>
          <div className="h-20 w-full bg-black">
            This space needs to disappear
          </div>
        </div>
      </div>
    </>
  )
}

export default WebsiteLayout
