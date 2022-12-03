import React from 'react'
import Catalog from '../components/Catalog'
import Contact from '../components/Contact'
import CoursesSeo from '../components/CoursesSeo'
import unfetch from 'isomorphic-fetch'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Head from 'next/head'
function courses({data}) {

  return (
  <Layout>
    <Head>
      <title>It kurslari, proqramlaşdırma kursları. Web development</title>
      <meta property="og:description" name="description" content='IT kurslari və web development kursları Bakida. Təcrübəli developer olmaq istəyirsənsə o zaman proqramlaşdırma kursları və it kurslari qiymeti ilə maraqlan
' key ='description'></meta>
      <meta property="og:keywords" name="keywords" content='it kurslari, it kurslari qiymeti, front end developer, web development, developer, proqramlaşdırma kursları' key ='keywords'></meta>
      <meta property="description" name="description" content='IT kurslari və web development kursları Bakida. Təcrübəli developer olmaq istəyirsənsə o zaman proqramlaşdırma kursları və it kurslari qiymeti ilə maraqlan
' key ='description'></meta>
      <meta property="keywords" name="keywords" content='it kurslari, it kurslari qiymeti, front end developer, web development, developer, proqramlaşdırma kursları' key ='keywords'></meta>
      <link rel="icon" href="/images/jedfvacad.svg"></link>
    </Head>
      <Header data={data.Kurslar}/>
      <Catalog course={data.Kurslar} cat={data.Kateqoriyalar}/>
      <Contact className="courses-contact" courses={data.Kurslar}/>
      <CoursesSeo seo={data.Seo[0].seo_description}/>
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



export default courses

