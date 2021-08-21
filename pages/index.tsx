import Head from 'next/head'
import { FunctionComponent } from 'react'

import { FormComponent } from '../components/form'

const Home: FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>dvhcvn Next.js demo</title>
        <meta name='description' content="Three tiers of Vietnam's administrative units" />
        <link rel='icon' href='/favicon.ico' />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We' crossOrigin='anonymous' />
      </Head>

      <main>
        <div className='container'>
          <FormComponent />
        </div>
      </main>
    </div>
  )
}

export default Home
