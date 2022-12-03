import React, {useState, useEffect, useMemo} from 'react'
import {Col, Container, Row} from 'reactstrap'
import CoursesCard from './CoursesCard'
import Image from 'next/image'
import Img1 from '../public/images/courses-top.jpg';
import Breadcrumb from './Breadcrumb'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link'


function Catalog(props) {

    const { t } = useTranslation();
    const cat = props.cat.map((item) => item.name);
    const categories = [...cat];
    const [active, setActive] = useState(2);

    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        props.course
    }, []);



    
    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
      setActive(event.target.parentNode.id);
     
    }
    
    function getFilteredList() {
      if (!selectedCategory) {
        return props.course; 
      }
      return props.course?.filter((item) => item.parent_id[0] === selectedCategory);
    }
    
    let filteredList = useMemo(getFilteredList, [selectedCategory, props.course]);


  return (
    <section id='catalog'>
        <div></div>
         <div className='catalog-top'>
            <Image src={Img1} alt={t(`common:alt5`)}></Image>
            <Container>
                <h1 className='title'>{t(`common:kurslar`)}</h1>
            </Container>
            
        </div>
        <Container>
            <Breadcrumb/>

            <ul className='category-list'>
                <li id='2' className={active == 2 ? "active courses-list" : 'courses-list'}> 
                <button onClick={handleCategoryChange} value='' >Bütün kurslar</button>
                </li>
                {categories?.map((item, index) => (
                    <li key={index}  id={index}  className={active == index ? "active courses-list" : 'courses-list'}>
                        <button onClick={handleCategoryChange} value={item}>{item}</button>
                    </li>
                ))} 
            </ul>
            
            <Row>
            {filteredList?.map((item, index)=>(
                <Col lg='3' md='6' xs='12' key={index} data-aos="fade-up">
                    <Link href="/kurslar/[slug]" as={`/kurslar/${item.slug}`}>
                        <a><CoursesCard title={item.name} subtitle={item.dersler} price1={item.offline_price} price2={item.online_price} date={item.month} img={item.thumbnail} alt={item.thumbnail_attribute} discount={item.discount}></CoursesCard></a>
                    </Link>
                </Col>
            ))}
            </Row>
        </Container>
    </section>
  )
}



export default Catalog