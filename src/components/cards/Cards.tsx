import React from "react";
import { CharacterCard } from "../../types";
import { Col } from "react-bootstrap";
import style from "./Card.module.scss";
import { Link } from "react-router-dom";

type CardsPropsType = {
  results: Array<CharacterCard> | undefined;
  page: string;
};

const Cards: React.FC<CardsPropsType> = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((x) => {
      return (
        <Col xl={3} lg={4} md={6} sm={6} xs={6} key={x.id} className="position-relative mb-3">
          <div className={style.cards}>
            <Link to={`${page}${x.id}`} key={x.id}>
              <img className={`${style.img} img-fluid`} src={x.image} alt={x.name} />
            </Link>
            <div className="content text-center p-2">
              <h5 className="fw-bold mt-2 mb-3">{x.name}</h5>
              <div>
                <div className="fs-6">Species: {x.species}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (x.status === "Dead") {
              return (
                <div className={`${style.badge} position-absolute badge bg-danger`}>{x.status}</div>
              );
            } else if (x.status === "unknown") {
              return (
                <div className={`${style.badge} position-absolute badge bg-secondary`}>
                  {x.status}
                </div>
              );
            } else {
              return (
                <div className={`${style.badge} position-absolute badge bg-success`}>
                  {x.status}
                </div>
              );
            }
          })()}
        </Col>
      );
    });
  } else if (!results) {
    display = "No Character Found! (((";
  }
  return <>{display}</>;
};

export default Cards;
