import React from 'react'
import AboutTop from '../components/AboutTop'
import BenefitHome from '../components/BenefitHome'
import Certificate from '../components/Certificate'
import Contact from '../components/Contact'
import Gallery from '../components/Gallery'
import unfetch from 'isomorphic-fetch'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

function about({data}) {

  return (
    <Layout>
        <Head>
          <title>JED Academy. Programlasdirma kurslari və it kurslari.</title>
          <meta property="og:description" name="description" content='JED Academy. IT kurslari və programlasdirma kurslari üzrə tədris. Jedacademy daha çox praktiki dərslərə üstünlük verir. JED Academy təcrübə təklif edir.' key ='description'></meta>
          <meta property="og:keywords" name="keywords" content='JED Academy, jedacademy, programlasdirma kurslari, it kurslari' key ='keywords'></meta>
          <meta property="description" name="description" content='JED Academy. IT kurslari və programlasdirma kurslari üzrə tədris. Jedacademy daha çox praktiki dərslərə üstünlük verir. JED Academy təcrübə təklif edir.' key ='description'></meta>
          <meta property="keywords" name="keywords" content='JED Academy, jedacademy, programlasdirma kurslari, it kurslari' key ='keywords'></meta>
          <link rel="icon" href="/images/jedfvacad.svg"></link>
        </Head>
        <Header data={data.Kurslar}/>
        <AboutTop/>
        <BenefitHome title='Niyə JedAcademy kursları seçməlisiniz?' className='about-benefit'/>
        <Certificate/>
        <Gallery className="about-gallery" dataImg={data.Galeriyalar}/> 
        <Contact courses={data.Kurslar}/>
        <Footer data={data.Kurslar}/>
    </Layout>
  )
}


export async function getServerSideProps(){
  const response=await unfetch('https://admin.jedacademy.az/api'); 
  const data=await response.json();

  return{
    props:{
      data
    }
  }
}

export default about