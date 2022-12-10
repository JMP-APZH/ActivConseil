import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MesprestasPage = () => {
  return (
    <>
      <MetaTags title="Mesprestas" description="Mesprestas page" />

      <h1 className='text-3xl font-bold text-center'>
        <p>
          Ici sera la page détaillant
        </p>
        <p>
        les prestations d'Activ'Conseils
        </p>
      </h1>
    </>
  )
}

export default MesprestasPage
