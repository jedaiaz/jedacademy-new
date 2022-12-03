import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/images/logo.png'
import Jedai from '../public/images/jedai.png'
import {BsTelephone, BsEnvelope, BsWhatsapp} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa'
import {FiTwitter, FiLinkedin, FiYoutube} from 'react-icons/fi'
import {IoIosArrowUp} from 'react-icons/io'
import useTranslation from "next-translate/useTranslation";

function Footer(props) {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }
    const { t } = useTranslation();
    return (
        <footer>
            <Container>
                <Row>
                    <Col xs='12' md='12' lg='3'>
                        <Link href="/">
                            <a className='logo'><Image src={Logo} alt='' ></Image></a>
                        </Link>
                        <p className='footer-subtitle'>{t(`common:footerText`)}</p>
                    </Col>
                    <Col xs='12' md='6' lg='2'>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>{t(`common:menu1`)}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/haqqimizda">
                                    <a>{t(`common:menu2`)}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/kurslar">
                                    <a>{t(`common:menu3`)}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/elaqe">
                                    <a>{t(`common:menu4`)}</a>
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col xs='12' md='6' lg='3'>
                        <ul>
                        {props.data?.map((item, id)=>( 
                            <li key={id}>
                            <Link href="/kurslar/[slug]" as={`/kurslar/${item.slug}`}>
                                <a className='menu-link'>{item.name}</a>
                            </Link>
                            </li>
                        ))}       
                        </ul>
                    </Col>
                    <Col xs='12' md='12' lg='4'>
                        <div className='footer-contact'>
                            <div className='footer-phone'>
                                <a href="tel:+994509836699"><BsTelephone/> +994 50 983 66 99</a>
                                <a href="tel:+994123101599"><BsTelephone/> +994 12 310 15 99</a>
                            </div>
                            <p><HiOutlineLocationMarker/> {t(`common:location`)}</p>
                            <a href='mailto:info@jedacademy.az'><BsEnvelope/> info@jedacademy.az</a>
                        </div>
                        <div className='social-links'>
                            <div>
                                <Link href='https://wa.me/+994509836699'>
                                    <a target="_blank"><BsWhatsapp/></a>
                                </Link>
                                <Link href='https://t.me/jedacademy_az'>
                                    <a target="_blank"><FaTelegramPlane/></a>
                                </Link>
                                <Link href='https://www.instagram.com/jedacademy.az'>
                                    <a target="_blank"><FaInstagram/></a>
                                </Link>
                                <Link href='https://www.facebook.com/jedacademy'>
                                    <a target="_blank"><FaFacebookF/></a>
                                </Link>
                            </div>
                            <div>                           
                                <Link href='https://twitter.com/JedAcademy'>
                                    <a target="_blank"><FiTwitter/></a>
                                </Link>
                                <Link href='https://www.linkedin.com/company/jedacademy/'>
                                    <a target="_blank"><FiLinkedin/></a>
                                </Link>
                                <Link href='https://www.youtube.com/channel/UCf-A2n4E2cwzah80Jfbh5aw'>
                                    <a target="_blank"><FiYoutube/></a>
                                </Link>
                                <Link href='mailto:info@jedacademy.az'>
                                    <a target="_blank"><BsEnvelope/></a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className='copyright'>
                    <p>© 2022 {t(`common:copy`)}</p>
                    <Link href="https://jedai.az/az/saytlarin-hazirlanmasi">
                        <a target="blank" className="jedai">Site By <Image src={Jedai} alt=""></Image></a>
                    </Link>
                </div>
            </Container>

            <Link href='https://wa.me/+994509836699'>
                <a target="_blank" className='wp-btn'><BsWhatsapp/></a>
            </Link>
            <Link href='https://t.me/jedacademy_az'>
                <a target="_blank" className='tg-btn'><FaTelegramPlane/></a>
            </Link>
            <a href="tel:+994709836699" className='phone-btn'><BsTelephone/></a>
            <div onClick={ClickHandler} className='top-btn'><IoIosArrowUp/></div>
        </footer>
    )
}




export default Footer