import type { NextPage } from 'next'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'

const Home: NextPage = () => {
  return (
    <>
    <Header />
    <Content />
    </>
  )
}

export default Home
