import { useEffect } from "react";
import { Container, Card, Row, Col, CardImg } from "react-bootstrap";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadFood, loading } from "../store/actions/food.action";

let FoodDetail = ({ loading_, error, food, loading, loadFood }) => {
  const { food: foodId } = useParams();

  useEffect(() => {
    if (foodId) {
      loading();
      loadFood(foodId);
    }
  }, [foodId]);

  return (
    <Container className="my-4">
      <Link to={"/"} className="btn btn-sm btn-danger mb-2">
        Back
      </Link>
      <div className="bg-light py-4 px-3">
        {loading_ ? (
          <h6 className="py-2 text-center">Loading...</h6>
        ) : error ? (
          <>
            <h3 className="text-center">404</h3>
            <p className="text-center">Food not found</p>
          </>
        ) : (
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} lg={4}>
                  <CardImg src={food?.image} />
                </Col>
                <Col xs={12} lg={8}>
                  <Card.Title>{food?.name}</Card.Title>
                  <hr />
                  <Card.Subtitle>{food?.description}</Card.Subtitle>
                  <Card.Text className="py-2">{food?.recipe}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </div>
    </Container>
  );
};

FoodDetail = connect(
  (state) => ({
    food: state.foods.food,
    loading_: state.foods.loading,
    error: state.foods.error,
  }),
  (dispatch) => ({
    loading: () => dispatch(loading()),
    loadFood: (food) => dispatch(loadFood(food)),
  })
)(FoodDetail);

export default FoodDetail;
