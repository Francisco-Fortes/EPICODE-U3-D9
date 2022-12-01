import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {
  useSelector((state) => state.favourites.content);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Favourites list</h2>
          <ListGroup>
            <ListGroup.Item>
              <span>Cras justo odio</span>
              <Button variant="danger">Delete</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
