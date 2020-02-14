import React from "react";
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import OptionsList from "./optionsList";

class addCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modelName: "",
      regristation: "",
      status: 81
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value =
      target.type === "select" ? Number(target.value) : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.postCar(this.state);

    this.setState({
      modelName: "",
      regristation: "",
      status: 81
    });
    event.target.reset();
  }

  render() {

    return (
      <Form className="add-car" onSubmit={this.handleSubmit}>
        <FormGroup className="cars-form">
          <Label>
            Car model:
            <Input
              className="car-input"
              type="text"
              name="modelName"
              value={this.state.modelName}
              onChange={this.handleInputChange}
            />
          </Label>

          <Label>
            Regristation Number:
            <Input
              className="car-input"
              type="text"
              name="regristation"
              value={this.state.regristation}
              onChange={this.handleInputChange}
            />
          </Label>

          <Label>
            Status:
            <Input
              type="select"
              value={this.state.value}
              onChange={this.handleInputChange}
              name="status"
            >
              <OptionsList globals={this.props.globals} />
            </Input>
          </Label>

          <Button type="submit" value="Submit">
            Add car
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default addCar;
