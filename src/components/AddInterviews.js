import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

class AddInterviews extends Component {
  constructor() {
    super();
    this.state = {
      companyName: '',
      intName: '',
      intDate: '',
      intTime: '',
      intNotes: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempInt = {
      companyName: this.state.companyName,
      intName: this.state.intName,
      intDate: this.state.intDate + ' ' + this.state.intTime,
      intNotes: this.state.intNotes
    };
    
    this.props.addInterview(tempInt);

    this.setState({
      companyName: '',
      intName: '',
      intDate: '',
      intTime: '',
      intNotes: ''
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'Add Interview Visible')
        }
      >
        <div
          className="int-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Interview
        </div>

        <div className="card-body">
          <form id="intForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="companyName"
                readOnly
              >
                Company Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="companyName"
                  placeholder="Company Name"
                  value={this.state.companyName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="intName"
              >
                Interviewer Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="intName"
                  placeholder="Interviewers Name"
                  value={this.state.intName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="intDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="intDate"
                  id="intDate"
                  value={this.state.intDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="intTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="intTime"
                  id="intTime"
                  value={this.state.intTime}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="intNotes">
                Interview Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="intNotes"
                  id="intNotes"
                  placeholder="Interview Notes"
                  value={this.state.intNotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Interview
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddInterviews;
