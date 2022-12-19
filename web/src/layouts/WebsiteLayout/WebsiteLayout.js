import React, { useState, useEffect } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'

import logoactivconseils_w from './logoactivconseils_w.jpg'

import logoactivconseils_b from './activeconseilslogo_black.png'

import threedyingyang from './yinyang4_2.jpg'

const WebsiteLayout = ({ children }) => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
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
        <header className="flex w-screen flex-row items-center justify-between pt-20 pb-2 pl-2 pr-2 text-white dark:bg-black">
          <Link to={routes.home()}>
            <div>
              {theme === 'dark' ? (
                <img
                  className=""
                  src={logoactivconseils_b}
                  // src="https://unsplash.com/photos/PonPBrdbiyg"
                  alt="logo pic"
                  width="90"
                  height="100"
                />
              ) : (
                <img
                  className="rounded-full"
                  src={logoactivconseils_w}
                  // src="https://unsplash.com/photos/PonPBrdbiyg"
                  alt="logo pic"
                  width="70"
                  height="70"
                />
              )}
            </div>
          </Link>

          <div className="flex">
            <ul className="flex flex-row items-end justify-center gap-1 pl-2 pr-1 pb-3 text-xs text-black dark:text-yellow-400">

            <li
              // className='solid border border-green-500'
              >
                <Link className="" to={routes.home()}>
                  Accueil
                </Link>
              </li>
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

            <button
              className="w-50 h-50 rounded-full bg-white p-1 font-bold text-black dark:bg-black"
              onClick={handleThemeSwitch}
            >
              <img
                className="rounded-full"
                src={threedyingyang}
                // src="https://unsplash.com/photos/PonPBrdbiyg"
                alt="logo pic"
                width="30"
                height="30"
              />
            </button>
          </div>
        </header>

        <main className="flex h-screen w-screen flex-col items-center justify-center">
          {children}
        </main>

        <div className="flex w-screen flex-col">
          <footer className="pb- w-screen pt-10 text-black dark:bg-black dark:text-yellow-400">
            <ul>
              <li className="text-center">
                Espace pour le texte pour de bas de page
              </li>
            </ul>
          </footer>
          <div className="h-10 w-full text-black dark:bg-black">
            This space needs to disappear
          </div>
        </div>
      </div>
    </>
  )
}

export default WebsiteLayout
