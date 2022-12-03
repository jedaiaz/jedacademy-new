import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image';
import Img from '../public/images/seo.png';
import useTranslation from "next-translate/useTranslation";
import parse from 'html-react-parser'


function SeoText(props) {
    
    const { t } = useTranslation();
  return (
    <section id="seo-text">
        <Container>
            <Row>
                <Col lg="6" data-aos="fade-up">
                    <Image src={Img} alt={t(`common:alt11`)}></Image>
                </Col>
                <Col lg='6'>
                    <h2 className='title' data-aos="fade-up">{t(`common:real`)}</h2>
                    <p className='subtitle' data-aos="fade-up">{parse(props.seo)}</p>
                </Col>
            </Row>
        </Container>
    </section>
    
  )
}

export default SeoText