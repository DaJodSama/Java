import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { GET_ALL, GET_ID } from "../../api/apiService";

function ListCategory() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // Fetch categories
    GET_ALL("category").then((response) => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="container">
      {categories.map((category) => (
        <div key={category.id}>
          <div className="section-heading text-center">
            <h2 className="hTitle">
              <Link to={`/product/list/${category.id}`}>{category.name}</Link>
            </h2>
          </div>
          <Row className="g-4 mt-4">
            {/* Fetch and display up to 6 products within the category */}
            <ProductsInCategory categoryId={category.id} limit={6} />
          </Row>
          {/* Add a link to view more products in this category */}
          <div className="wraplist-button text-center visible-mobile">
            <Link
              to={`/product/list/${category.id}`}
              className="button dark btn-collection"
            >
              Xem thêm sản phẩm <b>{category.name}</b>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
function ProductsInCategory({ categoryId }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products within the specified category
    GET_ID(`product?categoryId=${categoryId}`)
      .then((response) => {
        setProducts(response.data);
      });
  }, [categoryId]);

  return (
    <>
      {products
        .filter((product) => product.category.id === categoryId) // Filter products by matching category ID
        .slice(0, 6)
        .map((product) => (
          <Col
            xs={12}
            sm={6}
            md={6}
            lg={2}
            key={product.id}
            style={{ marginTop: "10px" }}
          >
            <Card className="h-100">
              {product.discount !== undefined && product.discount > 0 && (
                <div className="discount-badge" style={{
                  textAlign:"center",
                  backgroundColor: "#eb5757",
                  padding: "4px 4px", // Điều chỉnh padding theo ý muốn
                  fontSize: "12px",   // Điều chỉnh font-size theo ý muốn
                  borderRadius: "50%", // Điều chỉnh border-radius để bo tròn theo ý muốn
                  width:"32px",
                  height:"32px",
              

                }}>{product.discount}%</div>
              )}
              <Card.Img
                variant="top"
                src={require(`../../assets/images/items/${product.thumbnail}`)}
                style={{
                  height: "176px",
                  width: "176px",
                  marginBottom: "10px",
                  display: "block",
                  margin: "0 auto",
                }}
                alt="Product Image"
              />

              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: "15px", height: "35px" }}>
                  {product.title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#FF0000",
                    fontSize: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <b>Giá: </b>
                  {product.discount !== undefined ? (
                    <span>
                      {(
                        product.price *
                        (1 - product.discount / 100)
                      ).toLocaleString("vi-VN") + " VND"}
                    </span>
                  ) : product.price !== undefined ? (
                    product.price.toLocaleString("vi-VN") + " VND"
                  ) : (
                    "Price not available"
                  )}
                </Card.Text>

                <Link
                  to={`/product-detail?productId=${product.id}`}
                  type="button"
                  className="btn-buy"
                  title="Mua sản phẩm"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Xem sản phẩm
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
}

export default ListCategory;
