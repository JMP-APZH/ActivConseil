import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import './HomePage.css'

import salleformation1 from './salleformation1.jpg'
import salleformation2 from './salleformation2.jpg'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex h-full w-screen flex-col items-center justify-evenly bg-white p-2 dark:bg-black">
        {/* <h1 className="text-3xl font-bold">Ici sera le contenu d'accueil</h1> */}
        {/* <div className="text-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-6"> */}
        <div className="text-center text-black dark:text-white">
          <h1 className="text-5xl">Être bien accompagné</h1>
          <h1 className="text-5xl">
            pour une meilleure insertion professionnelle
          </h1>
        </div>

        <div className="flex gap-4 p-2">
          <img
            className="rounded-2xl"
            src={salleformation1}
            alt="logo pic"
            width="150"
            height="150"
          />

          <img
            className="rounded-2xl"
            src={salleformation2}
            alt="logo pic"
            width="150"
            height="150"
          />
        </div>

        <div className="flex w-full justify-start font-semibold text-green-500 underline">
          <p>Bienvenu chez ACTIV’CONSEILS</p>
        </div>

        <p className="dark:text-white">
          Créée en août 2022, Activ’Conseils a pour ambition de mettre son
          expertise en accompagnement des chercheurs d’emploi à votre service !
        </p>

        <ul className="w-full list-disc justify-start pl-6 dark:text-white">
          <li>Révélateur de compétences</li>
          <li>Activateur de projets et d’orientations</li>
          <li>Coach en motivation</li>
        </ul>

        <p className="w-full dark:text-white">Activ’Conseils c’est ça ! </p>

        <div className="w-full dark:text-white">
          <p>La présidente d’Activ’Conseils</p>
          <p className="font-semibold">Madame MOUTAMALLE</p>
        </div>

        {/* <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p> */}
      </div>
    </>
  )
}

export default HomePage
