import React from 'react';
import CarList from './CarList';
import AddCar from './AddCar';
import { Row, Col } from "reactstrap";


class Cars extends React.Component {


  render(){

    const { Cars, globals, postCar, changeCarStatus, removeCar } = this.props;
    
    const CarsActive = [];
    const CarsInactive = [];
    
    if(Cars){

      Cars.forEach(car => {
        if(car.status === 81) {
          CarsInactive.push(car)
        }
        if(car.status === 82){
          CarsActive.push(car)
        }
      });
    }
      

    return(
      <>
        <Row xs="1" md="2">
        <Col>
          <CarList
            changeCarStatus={changeCarStatus}
            removeCar={removeCar}
            cars={CarsActive}
            name="Avställd"
          />
        </Col>
        <Col>
          <CarList
            changeCarStatus={changeCarStatus}
            removeCar={removeCar}
            cars={CarsInactive}
            name="Påställd"
          />
        </Col>
      </Row>

      <Row xs="1" md="2">
        <AddCar globals={globals} postCar={postCar} />
      </Row>
    </>
    )
  }
}

export default Cars;