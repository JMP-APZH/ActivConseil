import React, { useState, useEffect } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'

import logoactivconseils_w from './logoactivconseils_w.jpg'

import logoactivconseils_b from './logoactivconseils_b.jpg'

import threedyingyang from './yin-yang.jpg'

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
        <header className="flex w-screen flex-row items-center justify-between pt-20 pb-2 pl-2 pr-4 text-white dark:bg-black">
          <Link to={routes.home()}>
            <div>
              {theme === 'dark' ? (
                <img
                  className=""
                  src={logoactivconseils_b}
                  // src="https://unsplash.com/photos/PonPBrdbiyg"
                  alt="logo pic"
                  width="100"
                  height="50"
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

          <button
            className="bg-white p-1 font-bold text-black"
            onClick={handleThemeSwitch}
          >
            <img
              className="rounded-full"
              src={threedyingyang}
              // src="https://unsplash.com/photos/PonPBrdbiyg"
              alt="logo pic"
              width="50"
              height="50"
            />
          </button>

          <ul className="flex flex-row items-end justify-end gap-4 text-xs text-black dark:text-yellow-400">
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
