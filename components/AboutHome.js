import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image';
import Img from '../public/images/about-home.png';
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";


function AboutHome() {
    const { t } = useTranslation();
  return (
    <section id="about">
        <Container>
            <Row>
                <Col lg='6'>
                    <h2 className='title' data-aos="fade-up">{t(`common:aboutTitle`)}</h2>
                    <p className='subtitle' data-aos="fade-up">{t(`common:aboutHomeSub`)}</p>
                    <p className='subtitle' data-aos="fade-up">{t(`common:aboutHomeSub2`)}</p>
                    <Link href="/haqqimizda">
                        <a className='button' data-aos="fade-up">{t(`common:button1`)}</a>
                    </Link>
                </Col>
                <Col lg='6'>
                    <div className='contact-img' data-aos="fade-up">
                        <Image src={Img} alt={t(`common:alt1`)}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}



export default AboutHome