import React from "react";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import "./car.css";

class CarList extends React.Component {
  render() {
    const { cars, name, changeCarStatus, removeCar } = this.props;


    let carInList = cars.map(car => (

      <ListGroupItem className="list-item" tag="a" key={car.id}>
        {car.modelName} ----
        {car.regristation}

        <Button
          onClick={() => changeCarStatus(car)}
          className="list-button"
        >
          Status
        </Button>

        <Button
          onClick={() => removeCar(car.id)}
          className="list-button"
        >
          x
        </Button>

      </ListGroupItem>
    ));

    return (
      <div>
        <h3 className="list-header"> {name} </h3>
        <ListGroup className="list">{carInList}</ListGroup>
      </div>
    );
  }
}

export default CarList;
