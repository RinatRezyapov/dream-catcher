import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Dreamcatcher from './dreamcatcher.svg';

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Dreamcatcher style={{ width: 300, position: 'absolute', opacity: 0.4 }} />
    </>
  )
}

export default HomePage
