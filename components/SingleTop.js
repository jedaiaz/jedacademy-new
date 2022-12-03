import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Breadcrumb from './Breadcrumb';
import Image from 'next/image'
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import {BsTelephone, BsWhatsapp} from 'react-icons/bs'
import Link from 'next/link'
import useTranslation from "next-translate/useTranslation";
import parse from 'html-react-parser'


function SingleTop(props) {
  const { t } = useTranslation();

  return (
    <section id="single-top">
      <Container>
        <Breadcrumb/>
       
        <Row>
          <Col lg="6" data-aos="fade-up">
              <p className='price-top'><span>{t(`common:eyani`)} </span> {props.online && <span> / {t(`common:online`)}</span>}</p>
              <div className='course-info'>
                <p className='price'><span>{props.offline} AZN </span>{props.online && <span> / {props.online} AZN</span>}</p>
                <p className='date'><BsFillCalendarCheckFill/> {props.month} {t(`common:ay`)}</p>
              </div>
              <h1 className='title'>{props.name}</h1>
              <p className='subtitle'>{props.desc}</p>
              <div className='buttons'>
                <a href="tel:+994509836699" className='button'><BsTelephone/> {t(`common:zeng`)}</a>
                <Link href='https://wa.me/+994509836699'>
                  <a target="_blank" className='button'><BsWhatsapp/> WhatsApp</a>
                </Link>
              </div>
          </Col>
          <Col lg="6">
              <div className='single-top-img' data-aos="fade-up">
                  <Image src={props.img} alt={props.alt}  layout='fill'></Image>
              </div>
          </Col>
        </Row>
        <div id='courses-info'>
          <h2 className='title' data-aos="fade-up">{t(`common:buKurs`)}</h2>
          <div className='courses-info'>
            {props.ders && props.ders.map((item, id)=>(
              <p className='course' key={id} data-aos="fade-up">{item}</p>
            ))}
          </div>
          <div className='courses-text' data-aos="fade-up">
            {parse(props.seo)}
          </div>
        </div>
      </Container>
    </section>
  )
}



export default SingleTop