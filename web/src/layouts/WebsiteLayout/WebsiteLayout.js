import React, { useState } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'

import logoactivconseils from './logoactivconseils.jpg'

const WebsiteLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <header className="flex w-full flex-row items-center justify-between bg-black p-4 text-white">
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

        <main className="flex h-screen w-full flex-col items-center justify-center">
          {children}
        </main>

        <footer className="mb-20 w-full bg-black p-4 text-yellow-400">
          <ul>
            <li className="text-center">Texte pour le bas de la page</li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default WebsiteLayout
