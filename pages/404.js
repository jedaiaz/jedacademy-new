import React from 'react'
import Link from 'next/link'
import Logo from '../public/images/logo.png'
import Img from '../public/images/404.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap'
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";

function Custom404() {
    
    const { t } = useTranslation();
    return <section id="error">
        <div></div>
        <Container>
            <div className='header-logo'>
                <Image src={Logo}></Image>
            </div>
            <Row>
                <Col lg='4'>
                    <div className='err-text'>
                        <p className='err-title'>Səhifə tapılmadı</p>
                        <p className='err-subtitle'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Ipsum.</p>
                        <Link href='/'>
                            <a className='button'>{t(`common:menu1`)}</a>
                        </Link>
                    </div>
                </Col>
                <Col lg='8' className='err-img'>
                    <Image src={Img}></Image>
                </Col>
            </Row>

        </Container>
    </section>
}


export default Custom404