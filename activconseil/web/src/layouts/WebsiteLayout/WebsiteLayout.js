import React, { useState } from 'react'
// import logoactivconseils from '-!file-loader!./logoactivconseils.jpg'
import logoactivconseils from './logoactivconseils.jpg'

const WebsiteLayout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col w-screen h-screen justify-center items-center">
    <header className="w-full bg-black text-white flex flex-row justify-between items-center p-4">
      <div>
        <img
          src={logoactivconseils}
          // src="https://unsplash.com/photos/PonPBrdbiyg"
          alt="logo pic"
          width="80"
          height="80"
        />
      </div>

      <ul className="flex flex-row justify-between gap-4 text-yellow-400">
        <li>
          A propos
        </li>
        <li>
          Mes Prestations
        </li>
        <li>
          Actu Insertion
        </li>
      </ul>
    </header>

    <main className="flex justify-center items-center w-full h-full">
      {children}
    </main>

    <footer className="w-full bg-black text-white">
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
