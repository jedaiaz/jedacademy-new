import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image'
import Img from '../public/images/about-top.png'
import Breadcrumb from './Breadcrumb';
import useTranslation from "next-translate/useTranslation";

function AboutTop() {
    const { t } = useTranslation();
  return (
    <section id="about-top">
        <Container>
            <Breadcrumb/>
            <Row>
                <Col lg="6">
                    <h1 className='title' data-aos="fade-up">JedAcademy</h1>
                    <p data-aos="fade-up">{t(`common:aboutSubtitle1`)}</p>
                    <p data-aos="fade-up">{t(`common:aboutSubtitle2`)}</p>
                    <p data-aos="fade-up">{t(`common:aboutSubtitle3`)}</p>
                </Col>
                <Col lg="6">
                    <div className='about-top-img' data-aos="fade-up">
                        <Image src={Img} alt={t(`common:alt2`)}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}


export default AboutTop