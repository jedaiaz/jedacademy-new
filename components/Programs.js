import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "reactstrap";
import useTranslation from "next-translate/useTranslation";
import parse from "html-react-parser";
import {
  BsFillCalendarCheckFill,
  BsWhatsapp,
  BsTelephone,
} from "react-icons/bs";
import Link from "next/link";

function Programs(props) {
  const { t } = useTranslation();
  return (
    <section id="programs">
      <Container>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <h3 className="program-title">{t(`common:program`)}</h3>
        <h2 className="title">{props.name}</h2>
        <Row>
          {props.course &&
            props.course.map((item, id) => (
              <Col xs="12" sm="12" md="6" lg="3" key={id} data-aos="fade-up">
                <div className="card program-card">
                  <div className="card-header">
                    <p>{item.months}</p>
                  </div>
                  <div className="card-body">
                    <ul>{parse(item.program)}</ul>
                  </div>
                </div>
              </Col>
            ))}
          {props.info && (
            <Col xs="12" sm="12" md="6" lg="3" data-aos="fade-up">
              <div className="card program-card last-card">
                {props.info.discount == "1" && (
                  <div className="discount">
                    <span>Tələbələrə</span>
                    <span>{props.endirim}%</span>
                    <span>Endirim</span>
                  </div>
                )}
                <div className="months">
                  <span>Aylıq ödəniş:</span>{" "}
                  <span className="card-date">
                    <BsFillCalendarCheckFill></BsFillCalendarCheckFill>{" "}
                    {props.info.month} {t(`common:ay`)}
                  </span>
                </div>
                <div className="card-price">
                  <p>
                    {t(`common:eyani`)}
                    {props.info.online_price && (
                      <span> / {t(`common:online`)}</span>
                    )}
                  </p>
                  <p>
                    <span>{props.info.offline_price} AZN </span>
                    {props.info.online_price && (
                      <span> / {props.info.online_price} AZN</span>
                    )}
                  </p>
                </div>
                <h2 className="title">{props.info.name}</h2>
                <div className="buttons">
                  <a href="tel:+994509836699" className="button">
                    <BsTelephone /> {t(`common:zeng`)}
                  </a>
                  <Link href="https://wa.me/+994509836699">
                    <a target="_blank" className="button">
                      <BsWhatsapp /> WhatsApp
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
}

export default Programs;
