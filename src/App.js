import React from "react";
import Cars from "./Components/Cars";
import { Container } from "reactstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Cars: [],
      globals: {}
    };

    this.postCar = this.postCar.bind(this);
    this.changeCarStatus = this.changeCarStatus.bind(this);
    this.removeCar = this.removeCar.bind(this);
  }

  componentDidMount() {
    //Get all Cars
    const API_ADDRESS = "http://localhost:62950/car";
    fetch(`${API_ADDRESS}/0`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          Cars: result
        });
      });

    fetch(`${API_ADDRESS}/globals`)
      .then(response => {
        if (response.status !== 200) {
          throw new Error("Usuccessful request to api");
        }
        return response.json();
      })
      .then(result => {
        this.setState({
          globals: result
        });
      });
  }

  postCar(prop) {
    const { modelName, regristation, status } = prop;

    let data = {
      modelName: `${modelName}`,
      regristation: `${regristation}`,
      status: Number(status)
    };

    fetch(`http://localhost:62950/car`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        return this.setState({
          Cars: res
        });
      })
      .catch(err => console.log(err));
  }

  changeCarStatus(props) {
    const { id, status } = props;
    let index = 81;

    if (status === 81) {
      index = 82;
    }

    let data = {
      id: id,
      statusCar: index
    };

    console.log(status, id)
    console.log(data)


    fetch(`http://localhost:62950/car/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      return response.json();
    })
    .then(res => {
      return this.setState({
        Cars: res
      });
    })
    .catch(err => console.log(err));

  }

  removeCar(id) {
    fetch(`http://localhost:62950/car/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        return this.setState({
          Cars: res
        });
      })
      .catch(err => console.log(err));
  }

  render() {


    return (
      <Container className="App">
        <h1>Cars</h1>

        <Cars 
          Cars={this.state.Cars}
          globals={this.state.globals}
          postCar={this.postCar} 
          changeCarStatus={this.changeCarStatus} 
          removeCar={this.removeCar} 
        />
      </Container>
    );
  }
}

export default App;
