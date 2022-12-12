import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AproposPage = () => {
  return (
    <>
      <MetaTags title="Apropos" description="Apropos page" />

      <div className="flex h-full w-full flex-col items-center justify-evenly bg-white p-2">
        {/* <h1 className="text-3xl font-bold">Ici sera le contenu d'accueil</h1> */}
        {/* <div className="text-center bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 p-6"> */}
        <div className="text-center text-yellow-400">
          <p className="-rotate-12 text-2xl font-bold">
            Être bien accompagné pour{' '}
          </p>
          <p className="-rotate-12 text-2xl font-bold">
            une meilleure insertion professionnelle
          </p>
        </div>

        <p>
          <p className="pb-2 font-semibold text-green-500">Qui sommes-nous ?</p>

          <p className="pb-2 font-semibold">
            J’ai découvert le monde de l’insertion en 2006 ; monde riche des
            valeurs qui ont déterminées mon engagement auprès des demandeurs
            d’emploi. Après avoir occupé différents postes dans différentes
            structures d’accompagnement, j’ai acquis la conviction qu’une
            meilleure information permet une meilleure insertion.
          </p>

          <p className="pb-2 font-semibold">La présidente d’Activ’Conseils</p>

          <p className="font-semibold">Sylvia MOUTAMALLE</p>
        </p>
      </div>
    </>
  )
}

export default AproposPage
