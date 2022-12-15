import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MesprestasPage = () => {
  return (
    <>
      <MetaTags title="Mesprestas" description="Mesprestas page" />

      <div className="flex h-full w-full flex-col items-center justify-evenly bg-white p-2 dark:bg-black">
        <div className="pt-8 pb-10 text-center text-yellow-400">
        <h1 className="text-5xl">Être bien accompagné</h1>
          <h1 className="text-5xl">
            pour une meilleure insertion professionnelle
          </h1>
        </div>

        <div>
          <div className="pb-4 text-sm">
            <p className="pb-2 font-semibold text-green-500">
              Activ’Conseils intervient auprès des demandeurs d’emploi :
            </p>

            <ul className="w-full list-disc justify-start pl-6 dark:text-white">
              <li>
                informations sur les dispositifs d’accompagnement dans le
                domaine de l’insertion
              </li>
              <li>Aide à la rédaction de CV et lettres de motivation</li>
              <li>
                Aide à la définition des choix d’orientation ( tests
                identifications des tendances professionnels, atouts
                orientations )
              </li>
              <li>
                Préparation aux entretiens d’embauche (entraînez-vous en réalité
                virtuelle avec le serious-game Mon entretien d’embauche de Pôle
                emploi)
              </li>
              <li>
                Coaching ( outils gestion du stress, base du développement
                personnel)
              </li>
              <li>Bilan de compétences</li>
              <li>VAE</li>
            </ul>
          </div>

          <div className="pb-4 text-sm">
            <p className="pb-2 font-semibold text-green-500">
              Activ’Conseils intervient auprès des scolaires :
            </p>

            <ul className="w-full list-disc justify-start pl-6 dark:text-white">
              <li>
                Aide à la définition des choix d’orientation / Bilan de
                compétences ( tests atouts orientations )
              </li>
              <li>Aide à la rédaction de CV et lettres de motivation</li>
              <li>Préparation aux entretiens d’embauche</li>
              <li>
                Coaching ( outils gestion du stress, base du développement
                personnel)
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="pb-2 font-semibold text-green-500">
              Nous, contactez :{' '}
            </p>
            {/* <p className="">Email : activconseils.sasu@gmail.com </p> */}
            <a href="mailto:activconseils.sasu@gmail.com">
              <div className="flex gap-2">
                <p className='dark:text-white'>Email : </p>{' '}
                <p className="text-blue-600 underline">
                  activconseils.sasu@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default MesprestasPage
