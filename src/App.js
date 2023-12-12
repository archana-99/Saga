import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import Food from "./components/Food";
import { loadFoods, loading } from "./store/actions/food.action";

let App = ({ loading_, error, foods, loading, loadFoods }) => {
  useEffect(() => {
    loading();
    loadFoods();
  }, []);

  return (
    <Container className="bg-light my-4 py-4">
      <h4 className="h4">
        Foods{foods.length > 0 ? ` (${foods.length})` : ""}
      </h4>
      <hr />
      <>
        {loading_ ? (
          <h6 className="py-2 text-center">Loading...</h6>
        ) : error ? (
          <h6 className="py-2 text-center">Error</h6>
        ) : foods.length == 0 ? (
          <h6 className="py-2 text-center">No foods</h6>
        ) : (
          <Row xs={1} md={3} className="g-4">
            {foods.map((food) => (
              <Col key={`food-${food.id}`}>
                <Food food={food} />
              </Col>
            ))}
          </Row>
        )}
      </>
    </Container>
  );
};

App = connect(
  (state) => ({
    loading_: state.foods.loading,
    error: state.foods.error,
    foods: state.foods.items,
  }),
  (dispatch) => ({
    loading: () => dispatch(loading()),
    loadFoods: () => dispatch(loadFoods()),
  })
)(App);

export default App;
