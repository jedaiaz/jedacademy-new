import AboutHome from "../components/AboutHome";
import BenefitHome from "../components/BenefitHome";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Gallery from "../components/Gallery";
import Homepage from "../components/Homepage";
import SeoText from "../components/SeoText";
import unfetch from 'isomorphic-fetch'
import Layout from '../components/Layout';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Head from 'next/head'

function Home({data}){

  return <Layout> 
     <Head>
      <title>Proqramlaşdırma kursları, IT kurslari. JED Academy.</title>
      <meta property="og:description" name="description" content='Proqramlaşdırma kursları, it kursları. Bakida proqramlasdirma kurslari. JED Academy proqramlasdirma dilleri kurslari təklif edir, sonda sertifikat verir.' key ='description'></meta>
      <meta property="og:keywords" name="keywords" content='proqramlaşdırma kursları, proqramlaşdırma, programlasdirma kurslari, bakida proqramlasdirma kurslari, proqramlasdirma dilleri kurslari, it kursları, it kurslari' key ='keywords'></meta>
      <meta property="description" name="description" content='Proqramlaşdırma kursları, it kursları. Bakida proqramlasdirma kurslari. JED Academy proqramlasdirma dilleri kurslari təklif edir, sonda sertifikat verir.' key ='description'></meta>
      <meta property="keywords" name="keywords" content='proqramlaşdırma kursları, proqramlaşdırma, programlasdirma kurslari, bakida proqramlasdirma kurslari, proqramlasdirma dilleri kurslari, it kursları, it kurslari' key ='keywords'></meta>
      <link rel="icon" href="/images/jedfvacad.svg"></link>
    </Head>
    <Header data={data.Kurslar}/>
    <Homepage/>
    <Courses course={data.Kurslar}/>
    <BenefitHome title='Niyə biz?' subtitle1='“JedAcademy”-də' subtitle2='tədris almaq üçün bir neçə səbəb'/>
    <AboutHome/>
    <Gallery className="home-gallery" dataImg={data.Galeriyalar}/>
    <Contact courses={data.Kurslar}/>
    <SeoText seo={data.Seo[1].seo_description}/> 
    <Footer data={data.Kurslar} />
  </Layout>
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

export default Home






