import React, { Component } from "react";
import "../App.css";
import Header from "./NavigationBar";

class TutorHomePage extends Component {
  render() {
    return (
      <div className="login-page">
        <div>
          <Header />
        </div>
        <br />
        <br />
        Tutor Home Page!
      </div>
    );
  }
}
export default TutorHomePage;
