import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image'
import Img from '../public/images/sertifikat.jpg'
import useTranslation from "next-translate/useTranslation";


function Certificate() {
    const { t } = useTranslation();
  return (
    <section id="certificate">
        <Container>
            <Row>
                <Col lg="6">
                    <h2 className='title' data-aos="fade-up">{t(`common:sertifikatTitle`)}</h2>
                    <p data-aos="fade-up">{t(`common:sertifikatSubtitle`)}</p>
                </Col>
                <Col lg="6">
                    <div className='certificate-img' data-aos="fade-up">
                        <Image src={Img} alt={t(`common:alt6`)}></Image>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}


export default  Certificate