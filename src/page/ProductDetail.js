import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/happyxmashmas/hnmexe/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col className="product_img">
            <img src={product?.img} />
          </Col>
          <Col>
            <h3>{product?.title}</h3>
            <p>{product?.price}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
