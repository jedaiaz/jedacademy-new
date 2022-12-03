import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image';
import Img from '../public/images/courses-seo.jpg'
import useTranslation from "next-translate/useTranslation";
import parse from 'html-react-parser'

function CoursesSeo(props) {
    const { t } = useTranslation();
  return (
    <section id="courses-seo">
        <Container>
            <Row>
                <Col lg='6'>
                    <h2 className='title' data-aos="fade-up">{t(`common:real2`)}</h2>
                    <p className='subtitle' data-aos="fade-up">{parse(props.seo)}</p>
                </Col>
                <Col lg="6" data-aos="fade-up">
                    <Image src={Img} alt={t(`common:alt9`)}></Image>
                </Col>
            </Row>
        </Container>
    </section>
  )
}



export default CoursesSeo