import React from 'react'
import Contact from '../components/Contact'
import ContactPage from '../components/ContactPage'
import unfetch from 'isomorphic-fetch'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Head from 'next/head'

function contact({data}) {
  return (
    <Layout>
      <Head>
      <title>JED Academy əlaqə. Jedacademy əlaqə. JED Academy Baku.</title>
      <meta property="og:description" name="description" content=' JED Academy əlaqə səhifəsi. JED Academy Baku it proqramlaşdırma kursları üçün saytda olan formu doldurun. Jedacademy əlaqə üçün sosial şəbəklərə yazın.
' key ='description'></meta>
      <meta property="og:keywords" name="keywords" content='JED Academy əlaqə, jedacademy əlaqə, JED Academy Baku' key ='keywords'></meta>
      <meta property="description" name="description" content=' JED Academy əlaqə səhifəsi. JED Academy Baku it proqramlaşdırma kursları üçün saytda olan formu doldurun. Jedacademy əlaqə üçün sosial şəbəklərə yazın.
' key ='description'></meta>
      <meta property="keywords" name="keywords" content='JED Academy əlaqə, jedacademy əlaqə, JED Academy Baku' key ='keywords'></meta>
      <link rel="icon" href="/images/jedfvacad.svg"></link>
 
     
    </Head>
      <Header data={data.Kurslar}/>
      <ContactPage/>
      <Contact className='contact-page' courses={data.Kurslar}/>
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


export default contact