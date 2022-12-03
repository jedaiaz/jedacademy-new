import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import CoursesCard from './CoursesCard'
import Link from 'next/link';
import useTranslation from "next-translate/useTranslation";

function Courses(props) {
    const { t } = useTranslation();
    
  return (
    <section id='courses'>
        <Container>
            <h2 className="title" data-aos="fade-up">{t(`common:kurslar`)}</h2>
            <p className='subtitle' data-aos="fade-up">{t(`common:kurslarSubtitle`)}</p>
            <Row>
            {props.course && props.course.map((item, index)=>(
                item.show_page === '1' &&
                <Col lg='3' md='6' xs='12' key={index} data-aos="fade-up">
                    <Link href="/kurslar/[slug]" as={`/kurslar/${item.slug}`}>
                        <a><CoursesCard title={item.name} subtitle={item.dersler} price2={item.online_price} price1={item.offline_price} date={item.month} img={item.thumbnail} alt={item.thumbnail_attribute} discount={item.discount} endirim={item.endirim}></CoursesCard></a>
                    </Link>
                </Col>
                
            ))}
            </Row>
        </Container>
    </section>
  )
}

export default Courses