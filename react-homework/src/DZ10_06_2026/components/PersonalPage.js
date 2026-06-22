import React, { Component } from "react";

class PersonalPage extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.photo} alt="Фото" />

        <h2>{this.props.name}</h2>

        <p><b>Телефон:</b> {this.props.phone}</p>

        <p><b>Email:</b> {this.props.email}</p>

        <p><b>Город:</b> {this.props.city}</p>

        <p><b>Опыт работы:</b> {this.props.experience}</p>

        <p><b>Навыки:</b> {this.props.skills}</p>
      </div>
    );
  }
}

export default PersonalPage;