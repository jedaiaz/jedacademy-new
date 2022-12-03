import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image'
import Img from '../public/images/contact-img.png';
import {BsTelephone, BsEnvelope, BsWhatsapp} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa'
import {FiTwitter, FiLinkedin, FiYoutube} from 'react-icons/fi'
import Link from 'next/link'
import Breadcrumb from './Breadcrumb';
import useTranslation from "next-translate/useTranslation";




function ContactPage() {
    const { t } = useTranslation();
  return (
    <section id='contact-top'>
    <Container>
        <Breadcrumb/>
        <Row>
            <Col lg='7'>
                <div className='contact-info'  data-aos="fade-right">
                    <h1 className='title'>{t(`common:contactTitle2`)}</h1>
                    <div className='contact-box'>
                        <div className='contact-phone'>
                            <Link href="https://wa.me/+994509836699">
                                <a target="_blank"><BsWhatsapp/> +994 50 983 66 99 (WhatsApp)</a>
                            </Link>
                            <a href="tel:+994709836699"><BsTelephone/> +994 70 983 66 99</a>
                            <a href="tel:+994123101599"><BsTelephone/> +994 12 310 15 99</a>
                        </div>
                        <p><HiOutlineLocationMarker/> {t(`common:location`)}</p>
                        <a href='mailto:info@jedacademy.az'><BsEnvelope/> info@jedacademy.az</a>
                    </div>
                    <div className='social-links'>
                        <Link href="https://wa.me/+994509836699">
                            <a target="_blank"><BsWhatsapp/></a>
                        </Link>
                        <Link href='https://t.me/jedacademy_az'>
                            <a target="_blank"><FaTelegramPlane/></a>
                        </Link>
                        <Link href='https://www.instagram.com/jedacademy'>
                            <a target="_blank"><FaInstagram/></a>
                        </Link>
                        <Link href='https://www.facebook.com/jedacademy'>
                            <a target="_blank"><FaFacebookF/></a>
                        </Link>
                        <Link href='https://twitter.com/JedAcademy'>
                            <a target="_blank"><FiTwitter/></a>
                        </Link>
                        <Link href='https://www.linkedin.com/company/jedacademy/'>
                            <a target="_blank"><FiLinkedin/></a>
                        </Link>
                        <Link href='https://www.youtube.com/channel/UCf-A2n4E2cwzah80Jfbh5aw'>
                            <a target="_blank"><FiYoutube/></a>
                        </Link>
                    </div>
                </div>
            </Col>
            <Col lg='5' data-aos="fade-left">
                <Image src={Img} alt={t(`common:alt8`)}></Image>
            </Col>
        </Row>
    </Container>
    
    
    </section>
  )
}


export default ContactPage