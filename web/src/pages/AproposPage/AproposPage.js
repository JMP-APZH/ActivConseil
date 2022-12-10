import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AproposPage = () => {
  return (
    <>
      <MetaTags title="Apropos" description="Apropos page" />

      <h1 className='text-3xl font-bold text-center'>
        <p>
          Ici sera la page détaillant
        </p>
        <p>
          ce qu'est Activ'Conseils
        </p>
        <p>
          et qui est votre conseillère
        </p>
      </h1>

    </>
  )
}

export default AproposPage
