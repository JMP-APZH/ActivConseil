import React, { useState } from 'react'

import { Link, navigate, routes } from '@redwoodjs/router'

import logoactivconseils from './logoactivconseils.jpg'

const WebsiteLayout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col w-screen h-screen justify-center items-center">
    <header className="w-full bg-black text-white flex flex-row justify-between items-center p-4">
      <div>
        <img
          className='rounded-full'
          src={logoactivconseils}
          // src="https://unsplash.com/photos/PonPBrdbiyg"
          alt="logo pic"
          width="80"
          height="80"
        />
      </div>

      <ul className="flex flex-row justify-between gap-4 text-yellow-400">
        <li
          // className='solid border border-green-500'
        >
          <Link to={routes.apropos()}>A propos</Link>
        </li>
        <li>
          <Link to={routes.mesprestas()}>Mes Prestations</Link>
        </li>
        <li>
          <Link to={routes.blog()}>Actu Insertion</Link>

        </li>
      </ul>
    </header>

    <main className="flex flex-col justify-center items-center w-full h-full">
      {children}
    </main>

    <footer className="w-full bg-black text-white p-4 text-yellow-400">
      <ul>
        <li className="text-center">
          Texte pour le bas de la page
        </li>
      </ul>
    </footer>
    </div>

    </>
  )

}

export default WebsiteLayout
