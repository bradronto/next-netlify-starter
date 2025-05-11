import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>WeeklyTimeCard</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
     shit
     what the handleClick hmm
     
      <main>
        <Header title="Welcome to my app, Bitches!!" />
        <object type="text/html" data="https://bradronto.github.io" width="100%" height="600px"></object>
  
     
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

       
       
      </main>
      
      <Footer />
    </div>
  )
}
