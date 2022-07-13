// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import BlogLayout from 'src/layouts/BlogLayout'

import { Router, Route, Set  } from '@redwoodjs/router'

import DreamCatchersLayout from 'src/layouts/DreamCatchersLayout'

import PostsLayout from 'src/layouts/PostsLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DreamCatchersLayout}>
        <Route path="/dream-catchers/new" page={DreamCatcherNewDreamCatcherPage} name="newDreamCatcher" />
        <Route path="/dream-catchers/{id:Int}/edit" page={DreamCatcherEditDreamCatcherPage} name="editDreamCatcher" />
        <Route path="/dream-catchers/{id:Int}" page={DreamCatcherDreamCatcherPage} name="dreamCatcher" />
        <Route path="/dream-catchers" page={DreamCatcherDreamCatchersPage} name="dreamCatchers" />
      </Set>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
