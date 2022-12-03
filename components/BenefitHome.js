import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image';
import Img from '../public/images/girl.png';
import School from '../public/images/icon/school 1 1.svg'
import Project from '../public/images/icon/icon3.svg'
import Price from '../public/images/icon/price-tag 1 1.svg'
import Work from '../public/images/icon/work-space 1.svg'
import Certificate from '../public/images/icon/certificate 1.svg'
import Intern from '../public/images/icon/icon4.svg'
import useTranslation from "next-translate/useTranslation";


function BenefitHome(props) {
    const { t } = useTranslation();
    const benefit=[
        {
            class: 'left-card',
            img: School,
            desc: t(`common:benefit-desc1`),
            aos:"fade-right"
        },
        {
            class: 'right-card',
            img: Project,
            desc: t(`common:benefit-desc2`),
            aos:"fade-left"
        },
        {
            class: 'left-card',
            img: Price,
            desc: t(`common:benefit-desc3`),
            aos:"fade-right"
        },
        {
            class: 'right-card',
            img: Work,
            desc: t(`common:benefit-desc4`),
            aos:"fade-left"
        },
        {
            class: 'left-card',
            img: Certificate,
            desc: t(`common:benefit-desc5`),
            aos:"fade-right"
        },
        {
            class: 'right-card',
            img: Intern,
            desc: t(`common:benefit-desc6`),
            aos:"fade-left"
        }
    ]

  return (
    <section id='benefit' className={props.className}>
        <Container>
            <div></div>
            <h4 className="sub-title" data-aos="fade-up">{props.title}</h4>
            <h2 className="title" data-aos="fade-up"><span>{props.subtitle1}</span> <span>{props.subtitle2}</span></h2>
            <Row>
                <div className="girl" data-aos="fade-up"><Image src={Img} alt={t(`common:alt4`)}></Image> </div>
                {benefit.map((benefit, benefitId)=>(
                    <Col xs="12" lg="5" key={benefitId} className={benefit.class} data-aos="fade-up">
                        <div className="benefit-card">
                            <div className="card-div">
                                <Image src={benefit.img} alt={t(`common:alt3`)}></Image>
                            </div>
                            <p>{benefit.desc}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}


export default BenefitHome



