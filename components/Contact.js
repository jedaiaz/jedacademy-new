import React, {useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'reactstrap'
import Image from 'next/image';
import Img from '../public/images/form-image.png';
import {useForm} from 'react-hook-form'
import useTranslation from "next-translate/useTranslation";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Form from 'react-bootstrap/Form'




function Contact(props) {
    const { t } = useTranslation();
    const inputRef = useRef(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    

    const onSubmit = data => {
        axios
         .post(
             'https://admin.jedacademy.az/api/sendmail',
             data,
             { headers: { 'Content-Type': 'application/json' }}
          )
         .then(response => toast.success(t("common:success-message")))
         .catch(error =>toast.success(t("common:success-message")));
         reset();
     };

     let arr = [];

     props.courses.map((item, id) => {
           arr.push(item.name);
    })
    


    

  return (
    <section id="contact" className={props.className}>
    <ToastContainer />
    <Container>
        <Row>
            <Col lg="6" md="12">
                <h2 className='title contact-title' >{t(`common:contactTitle`)}</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} >
                
                    <Row data-aos="fade-up">
                        <Col xs="12">
                            <input id="name" {...register('name', { required: true })} placeholder={t(`common:placeholder1`)}/>
                            {errors.name && errors.name.type === "required" && <div className='error-message'>{t("common:error-message-1")}</div>}
                        </Col>
                        <Col xs="12">
                            <input id="email" type='email' placeholder={t(`common:placeholder2`)} {...register('email', {required: true})} />
                            {errors.email && errors.email.type === "required" && <div className='error-message'>{t("common:error-message-2")}</div>}
                        </Col>
                        <Col xs="12">
                            <input id="phone" {...register('phone', {required: true, maxLength:13, minLength:13})} defaultValue='+994'/>
                            {errors.phone && errors.phone.type === "required" && <div className='error-message'>{t("common:error-message-3")}</div>}
                            {errors.phone && errors.phone.type === "maxLength" && <div className='error-message'>{t("common:error-message-4")}</div> }
                            {errors.phone && errors.phone.type === "minLength" && <div className='error-message'>{t("common:error-message-4")}</div> }
                        </Col>
                        <Col xs="12"> 
                             <Form.Select aria-label="Default select example"  {...register('courses_id3', {required: true})}>
                                <option disabled>Kursu Seçin*</option>
                                {arr?.map((item, index)=>(
                                    <option value={item} key={index}>{item}</option>
                                ))}
                            </Form.Select>
                            
                            {errors.courses_id && errors.courses_id.type === "required" && <div className='error-message'>{t("common:error-message-5")}</div>}
                        </Col>
                        <Col xs="12" className="btn-div">
                            <button className='button'>{t(`common:button2`)}</button>
                        </Col>    
                    </Row>
                </form>
            </Col>
            <Col lg="6" md="12">
                <div className='contact-img' data-aos="fade-up">
                    <Image src={Img} alt={t(`common:alt7`)}/>
                </div>
            </Col>
        </Row>
    </Container>
</section>
  )
}


export default Contact