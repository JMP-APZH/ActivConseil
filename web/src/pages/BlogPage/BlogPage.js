import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />

      <h1 className='text-3xl font-bold text-center'>
        <p>
          Ici sera le blog
        </p>
        <p>
          où l'utilisateur trouvera
        </p>
        <p>
          les actus liées à l'insertion
        </p>
      </h1>
    </>
  )
}

export default BlogPage
