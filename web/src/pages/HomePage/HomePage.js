import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex h-full w-full flex-col items-center justify-evenly bg-white p-2">
        {/* <h1 className="text-3xl font-bold">Ici sera le contenu d'accueil</h1> */}
        <div className="text-center">
          <p className="-rotate-12 font-bold text-2xl">Être bien accompagné pour </p>
          <p className="-rotate-12 pb-8 font-bold text-2xl">
            une meilleure insertion professionnelle
          </p>
        </div>

        <div className="flex w-full justify-start text-green-500 font-semibold underline">
          <p>Bienvenu chez ACTIV’CONSEILS</p>
        </div>

        <p>
          Créée en août 2022, Activ’Conseils a pour ambition de mettre en son
          expertise en accompagnement des chercheurs d’emploi à votre service !
        </p>

        <ul className="pl-6 w-full list-disc justify-start">
          <li>Révélateur de compétences</li>
          <li>Activateur de projets et d’orientations</li>
          <li>Coach en motivation</li>
        </ul>

        <p className='w-full'>Activ’Conseils c’est ça !!!! </p>

        <div className='w-full'>
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
