import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap'
import Image from 'next/image';
import {MdClose} from 'react-icons/md';
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import useTranslation from "next-translate/useTranslation";
import Link from 'next/link';


function Gallery(props) {
    const { t } = useTranslation();
   
      const [clickedImg, setClickedImg] = useState(null);
      const [currentIndex, setCurrentIndex] = useState(null);
    
      const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.image);
        console.log('as')
      }
    
      const handleRotationLeft = () => { 
        const totalLength = props.dataImg.length;
        if (currentIndex === 0) {
          setCurrentIndex(totalLength - 1);
          const newUrl = props.dataImg[totalLength - 1].image;
          setClickedImg(newUrl);
          return;
        }
    
        const newIndex = currentIndex - 1;
        const newUrl = props.dataImg.filter((item) => {
          return props.dataImg.indexOf(item) === newIndex;
        });
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
        
      };
      
      const handleRotationRight = () => {
        const totalLength = props.dataImg.length;
    
        if(currentIndex +1 >= totalLength){
          setCurrentIndex(0);
          const newUrl = props.dataImg[0].image;
          setClickedImg(newUrl);
          return;
        }
    
        const newIndex = currentIndex + 1;
        const newUrl = props.dataImg.filter((item) => {
          return props.dataImg.indexOf(item) === newIndex;
        });
    
        const newItem = newUrl[0].image;
        setClickedImg(newItem);
        setCurrentIndex(newIndex);
      }
    
      const handleDismissClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
          setClickedImg(null);
        }
      };

  return (
    <section id="gallery" className={props.className}>
        <Container>
            <h2 className="title" data-aos="fade-up">{t(`common:gallery`)}</h2>
            <p className='subtitle' data-aos="fade-up">{t(`common:gallerySubtitle`)}<Link href="/elaqe">
                        <a>{t(`common:gallerySubtitleLink`)}</a>
                    </Link></p>
            <div className='gallery-images'>
                {props.dataImg && props.dataImg.map((item, index) => (
                    <div key={index} className="gallery-item" data-aos="fade-up" onClick={() => handleClick(item,index)}>
                        <Image src={item.image} alt={item.attribute} layout='fill'></Image>
                    </div>
                ))
                } 
               
            </div>
                
            {clickedImg && (
                <div className='lightbox'>
                    <div className='dismiss' onClick={handleDismissClick}>
                    <div><MdClose className='dismiss dismiss-btn' onClick={handleDismissClick}/></div>
                    <div className="left-btn" onClick={handleRotationLeft}><BsChevronLeft/></div>
                    <div className="lightbox-box">
                        <Image src={clickedImg} alt="" layout='fill'></Image>
                    </div>
                    <div className="right-btn" onClick={handleRotationRight}><BsChevronRight/></div>
                    </div>
                </div>
            )}
        </Container>
    </section>
  )
}



export default Gallery