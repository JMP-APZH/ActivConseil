import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BlogPage = () => {
  return (
    <>
      <MetaTags title="Blog" description="Blog page" />

      <div className="flex h-full w-full flex-col items-center justify-evenly bg-white p-2 dark:bg-black">
        <h1 className="text-center text-5xl font-bold dark:text-white">
          <p>Ici sera le blog</p>
          <p>où l’utilisateur trouvera</p>
          <p>les actus liées à l’insertion</p>
        </h1>
      </div>
    </>
  )
}

export default BlogPage
