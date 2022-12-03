import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/images/logo.png'
import {BsTelephone, BsWhatsapp, BsEnvelope} from 'react-icons/bs'
import {FaFacebookF, FaInstagram, FaTelegramPlane} from 'react-icons/fa'
import {FiTwitter, FiLinkedin, FiYoutube} from 'react-icons/fi'
import useTranslation from "next-translate/useTranslation";




function Header(props) {
  const { t, lang } = useTranslation();

  const showMenu = () => {
    const menuBtn = document.getElementById('menu-btn');
    if(menuBtn.classList.contains('show')){
      menuBtn.classList.remove('show')
    }else{
      menuBtn.classList.add('show')
    }
  }

  return (
    <header>
        <Container>
            <Link href="/">
                <a className='header-logo'><Image src={Logo} alt=''></Image></a>
            </Link>
            <div className='header-phone-box'>
              <Link href='https://wa.me/+994509836699'>
                <a target="_blank"><BsWhatsapp/> +994 50 983 66 99</a>
              </Link>
             
              <a href="tel:+994709836699"><BsTelephone/> +994 70 983 66 99</a>
              <a href="tel:+994123101599"><BsTelephone/> +994 12 310 15 99</a>
            </div>
            
            <div className="menu btn8" data-menu="8" id='menu-btn' onClick={showMenu}>
              <div className="icon-E"></div>
              <div className="icon-X"></div>
            </div>
           
            <nav className='menu-bar'>
              <ul className='menu-list'>
                <li>
                  <Link href="/"><a className='menu-link' onClick={showMenu}>{t(`common:menu1`)}</a></Link>
                </li>
                <li>
                  <Link href="/haqqimizda"><a className='menu-link' onClick={showMenu}>{t(`common:menu2`)}</a></Link>
                </li>
                <li>
                  <Link href='/kurslar'><a className='menu-link' onClick={showMenu}>{t(`common:menu3`)}</a></Link>
                  <ul className='sub-menu'>
                  {props.data?.map((item, id)=>( 
                    <li key={id}>
                      <Link href="/kurslar/[slug]" as={`/kurslar/${item.slug}`}>
                        <a className='menu-link' onClick={showMenu}>{item.name}</a>
                    </Link>
                    </li>
                  ))}
                  </ul>
                </li>
                <li>
                  <Link href='/elaqe'><a className='menu-link' onClick={showMenu}>{t(`common:menu4`)}</a></Link>
                </li>
              </ul>
              <div className='menu-bottom'>
                <div className='mobile-div'>
                  <a href="tel:+994709836699"><BsTelephone/> +994 70 983 66 99</a>
                  <a href="tel:+994123101599"><BsTelephone/> +994 12 310 15 99</a>
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
              </div>
            </nav>
        </Container>
    </header>
  )
}


export default Header