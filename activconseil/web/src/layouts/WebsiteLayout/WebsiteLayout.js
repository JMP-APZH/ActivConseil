const WebsiteLayout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col w-screen h-screen justify-center items-center">
    <header className="w-full bg-black text-white">
      <ul>
        <li>
          A propos
        </li>
      </ul>
    </header>

    <main className="flex justify-center items-center w-full h-full">
      {children}
    </main>

    <footer className="w-full bg-black text-white">
      <ul>
        <li>
          A propos
        </li>
      </ul>
    </footer>
    </div>

    </>
  )

}

export default WebsiteLayout
