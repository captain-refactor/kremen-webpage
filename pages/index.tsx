import type { NextPage } from 'next'
import { observer } from 'mobx-react-lite'
import Head from 'next/head'


const Home: NextPage = observer(() => {

  return (
    <div>
      <div className='bg-white h-screen relative box-border'>
        <Head>
          <title>Jan Kremeň - Software Engineer</title>
        </Head>
        <div className='pt-16 text-center md:absolute md:top-1/3 md:left-1/4 md:text-left md:p-0'>
          <h1 className='text-4xl sm:text-6xl app-font gradient-text'>Jan Kremeň</h1>
          <div className='text-xl sm:text-2xl ml-1 mb-6 app-font'>
            Software Engineer
          </div>
          <div>
            <a href='mailto:jan@kre.men' className='sm:text-lg ml-1.5 app-font underline'>jan@kre.men</a>
          </div>
          <div className='space-x-1.5 pl-2'>
            <a
              href='https://github.com/captain-refactor'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/github-mark.png' alt='Github account' className='inline-block w-6 mr-1' />
            </a>
            <a
              href='https://www.linkedin.com/in/jan-kreme%C5%88-496087a4/'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/linkedin.svg' alt='Linkedin account' className='inline-block w-6 mr-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Home
