import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return <>
    <header>
      <h1>
        <Link to={routes.home()}>Welcome to the Dream Catcher!</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link to={routes.dreamCatchers()}>Catch your dream</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
  </>
}

export default BlogLayout
