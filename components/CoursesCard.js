import React from 'react'
import {Card} from 'reactstrap'
import Image from 'next/image';
import {BsFillCalendarCheckFill} from 'react-icons/bs'
import useTranslation from "next-translate/useTranslation";

function CoursesCard(props) {
  const { t } = useTranslation();
  return (
    <Card className='courses-card'>
        <div className='card-head'>
          <Image src={props.img} alt={props.alt} layout='fill'></Image>
        </div>
        {props.discount === '1' &&
            <div className="discount">
              <span>Tələbələrə</span>
              <span>{props.endirim}%</span>
              <span>Endirim</span>
            </div>
        }
        <div className='card-body'>
          <h2 className='card-title'>{props.title}</h2>
          <p className='card-subtitle'>{props.subtitle.join(', ')}</p>
        </div>
        <div className='card-footer'>
          <p className='card-date'><BsFillCalendarCheckFill></BsFillCalendarCheckFill> {props.date} {t(`common:ay`)}</p>
          <div className='card-price'>
            <p><span>{props.price1} AZN  </span>
            {props.price2 &&
              <span> / {props.price2} AZN</span>
            }
            </p>
            <p>{t(`common:eyani`)} 
            {props.price2 &&
               <span> / {t(`common:online`)}</span>
            }
           </p>
          </div>
        </div>
    </Card>
  )
}


export default CoursesCard