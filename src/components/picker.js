import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const colors = [
  "#b89c12",
  "#07ed1e",
  "#073ded",
  "#e9ed07",
  "#ed07ed",
  "#cf0606",
  "#f57842",
  "#faa716",
  "#91276a",
  "#fcd0c7",
  "#07ede9",
  "#e65f05",
  "#087bc7",
  "#4a1b07",
  "#164266",
  "#28a745",
];
class Picker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#28a745",
    };
    this.toggle = false;
  }

  handleColor = () => {
    this.setState({
      toggle: true,
    });
  };

  checkColor = (e) => {
    this.setState({
      color: e.target.style.backgroundColor,
      toggle: false,
    });
  };
  render() {
    return (
      <center>
        <div
          className="container-lg m-2 px-5"
          style={{
            height: "fit-content",
            backgroundColor: "#bfa3cc",
            borderRadius: "20px",
          }}
        >
          <h2 className="pt-2 d-flex justify-content-center fw-bolder">
            Color Picker
          </h2>
          <div
            className="container-lg m-3 border"
            style={{
              backgroundColor: "white  ",
              height: "200px",
              borderRadius: "20px",
              boxShadow: "2px 2px 8px black",
            }}
          >
            <div className="">
              {this.state.toggle ? (
                colors.map((item) => {
                  return (
                    <button
                      onClick={this.checkColor}
                      className=" mx-2 border-1"
                      style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: item,
                        boxShadow: "5px 5px 5px black",
                        borderRadius: "10px",
                      }}
                    ></button>
                  );
                })
              ) : (
                <br />
              )}
            </div>
            <div>
              <button
                id="clickButton"
                className="text-light border-1 m-5 p-2"
                onClick={this.handleColor}
                style={{
                  backgroundColor: this.state.color,
                  borderRadius: "20px",
                }}
              >
                Pick Color
              </button>
            </div>
          </div>
         
        </div>
      </center>
    );
  }
}

export default Picker;