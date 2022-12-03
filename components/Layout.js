import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import useTranslation from "next-translate/useTranslation";

function Layout({children}) {
  const { t } = useTranslation();

  return (
    <div>
        <Head>
          <title>Proqramlaşdırma kursları. JedAcademy proqramlaşdırma.</title>
          <meta property="og:title" content='Proqramlaşdırma kursları. JedAcademy proqramlaşdırma.' key="title" />
          <meta property="og:description" name="description" content='Proqramlaşdırma kursları. Bakida proqramlasdirma kurslari. JedAcademy sizə əsas növ proqramlasdirma dilleri kurslari təklif edir və sonda sertifikat verir.' key ='description'></meta>
          <meta property="og:keywords" name="keywords" content='proqramlaşdırma kursları, proqramlaşdırma, programlasdirma kurslari, bakida proqramlasdirma kurslari, proqramlasdirma dilleri kurslari' key ='keywords'></meta>
          <link rel="icon" href="/images/jedfvacad.svg"></link>
        </Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PC9NK2Z');
          `}
        </Script>
        <main>{children}</main>
    </div>
  )
}

export default Layout