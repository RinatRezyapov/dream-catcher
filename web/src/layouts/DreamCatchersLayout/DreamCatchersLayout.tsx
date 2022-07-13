import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type DreamCatcherLayoutProps = {
  children: React.ReactNode
}

const DreamCatchersLayout = ({ children }: DreamCatcherLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.dreamCatchers()}
            className="rw-link"
          >
            DreamCatchers
          </Link>
        </h1>
        <Link
          to={routes.newDreamCatcher()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New DreamCatcher
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default DreamCatchersLayout
