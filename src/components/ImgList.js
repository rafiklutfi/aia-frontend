import React from "react";
import "../style/ImgList.css";
import { Container, Row, Col } from "reactstrap";

const ImgList = (props) => {
  return (
    <Container>
      <Row>
        {props.images.map((image) => {
          let srcPath =
            "https://farm" +
            image.farm +
            ".staticflickr.com/" +
            image.server +
            "/" +
            image.id +
            "_" +
            image.secret +
            ".jpg";

          return (
            <Col sm="4">
              <div key={image.id} style={{ marginBottom: "2rem" }}>
                <div className="imageList__container">
                  <img
                    className="imageList__image"
                    src={srcPath}
                    alt={image.farm}
                  />
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ImgList;
