// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import WebsiteLayout from './layouts/WebsiteLayout/WebsiteLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={WebsiteLayout}>
        <Route path="/blog" page={BlogPage} name="blog" />
        <Route path="/mesprestas" page={MesprestasPage} name="mesprestas" />
        <Route path="/apropos" page={AproposPage} name="apropos" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
