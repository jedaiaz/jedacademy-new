import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Image from 'next/image'
import Img from '../public/images/home.png';
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";



function Homepage() {
    
    const { t, lang } = useTranslation();
   

  return (
    <section id='home'>
        <Container>
            <Row>
                <Col lg='6'>
                    <h3>{t(`common:jedacademy`)} </h3>        
                    <h1 className='title'>{t(`common:hometitle`)}</h1>
                    <p>{t(`common:homesubtitle`)}</p>
                    <p>{t(`common:homesubtitle1`)}</p>
                    <p>{t(`common:homesubtitle2`)}</p>
                    <div className='btn-div'>
                        <Link href="/elaqe">
                            <a className='button'>{t(`common:contactTitle2`)}</a>
                        </Link>
                        <Link href="/kurslar">
                            <a className='home-btn button'>{t(`common:button4`)}</a>
                        </Link>
                    </div>
                </Col>
                <Col lg='6'>
                    <Image src={Img} alt={t(`common:alt10`)}></Image>
                </Col>
            </Row>
        </Container>
    </section>
  )
}



export default Homepage

