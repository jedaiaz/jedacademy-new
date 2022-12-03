import React from 'react'
import Contact from '../../components/Contact'
import Programs from '../../components/Programs'
import SingleTop from '../../components/SingleTop'
import Head from 'next/head'
import unfetch from 'isomorphic-fetch'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Related from '../../components/Related'

function single({data, data1}) {
  return (
    <Layout>
        <Head>
          <title>{data1.data.meta_title}</title>
          <meta property="og:description" name="description" content={data1.data.meta_description} key ='description'></meta>
          <meta property="og:keywords" name="keywords" content={data1.data.meta_keyword} key ='keywords'></meta>
          <meta property="description" name="description" content={data1.data.meta_description} key ='description'></meta>
          <meta property="keywords" name="keywords" content={data1.data.meta_keyword} key ='keywords'></meta>
        </Head>
        <Header data={data.Kurslar}/>
        <SingleTop offline={data1.data.offline_price} online={data1.data.online_price} month={data1.data.month} name={data1.data.name} desc={data1.data.short_description} alt={data1.data.image_attribute} seo={data1.data.seo_description} ders={data1.data.dersler} img={data1.data.image}/>
        <Programs name={data1.data.name} course={data1.data.programs} info={data1.data} endirim={data1.data.endirim}/>
        <Related course={data.Kurslar} name={data1.data.name}/>
        <Contact className="courses-contact" courses={data.Kurslar}/>
        <Footer data={data.Kurslar}/>
    </Layout>
  )
}

export async function getStaticPaths() {
  const response1=await unfetch('https://admin.jedacademy.az/api/courses'); 
  const data1=await response1.json();

  return {
    paths: data1.map( course => {
      return {
        params: { slug: `${course.slug}` }
      }
    }),
    fallback: false 
  };
}




export async function getStaticProps({params}){
  const response1=await unfetch('https://admin.jedacademy.az/api/courses/'+ params.slug); 
  const response=await unfetch('https://admin.jedacademy.az/api'); 
  const data1=await response1.json();
  const data=await response.json();

  return{
    props:{
      data1,
      data
    }
  }
}

export default single