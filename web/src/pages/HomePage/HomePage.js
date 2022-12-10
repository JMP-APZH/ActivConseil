import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="flex h-full w-full flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold">Ici sera le contenu d'accueil</h1>
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
