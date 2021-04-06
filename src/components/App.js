import React, { Component } from 'react';
import '../css/App.css';

import AddInterviews from './AddInterviews';
import SearchInterviews from './SearchInterviews';
import ListInterviews from './ListInterviews';

import { findIndex, without } from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myInterviews: [],
      formDisplay: false,
      orderBy: 'intDate',
      orderDir: 'asc',
      queryText: 'cunt',
      lastIndex: 0
    };
    this.deleteInterview = this.deleteInterview.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addInterview = this.addInterview.bind(this);
    this.changeOrder = this.changeOrder.bind(this);
    this.searchInterview = this.searchInterview.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  toggleForm() {
    this.setState({
      formDisplay: !this.state.formDisplay
    });
  }

  searchInterview(query) {
    this.setState({ queryText: query });
  }

  changeOrder(order, dir) {
    this.setState({
      orderBy: order,
      orderDir: dir
    });
  }

  updateInfo(name, value, id) {
    let tempInts = this.state.myInterviews;
    let intIndex = findIndex(this.state.myInterviews, {
      intId: id
    });
    tempInts[intIndex][name] = value;
    this.setState({
      myInterview: tempInts
    });
  }

  addInterview(int) {
    let tempInts = this.state.myInterviews;
    int.intId = this.state.lastIndex;
    tempInts.unshift(int);
    this.setState({
      myInterviews: tempInts,
      lastIndex: this.state.lastIndex + 1
    });
  }

  deleteInterview(int) {
    let tempInts = this.state.myInterviews;
    tempInts = without(tempInts, int);

    this.setState({
      myInterviews: tempInts
    });
  }

  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const ints = result.map(item => {
          item.intId = this.state.lastIndex;
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          return item;
        });
        this.setState({
          myInterviews: ints
        });
      });
  }

  render() {
    let order;
    let filteredInts = this.state.myInterviews;
    if (this.state.orderDir === 'asc') {
      order = 1;
    } else {
      order = -1;
    }

    filteredInts = filteredInts
      .sort((a, b) => {
        if (
          a[this.state.orderBy].toLowerCase() <
          b[this.state.orderBy].toLowerCase()
        ) {
          return -1 * order;
        } else {
          return 1 * order;
        }
      })
      .filter(eachItem => {
        return (
          eachItem['companyName']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem['intName']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase()) ||
          eachItem['intNotes']
            .toLowerCase()
            .includes(this.state.queryText.toLowerCase())
        );
      });

    return (
      <main className="page bg-white" id="intratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddInterviews
                  formDisplay={this.state.formDisplay}
                  toggleForm={this.toggleForm}
                  addInterview={this.addInterview}
                />
                <SearchInterviews
                  orderBy={this.state.orderBy}
                  orderDir={this.state.orderDir}
                  changeOrder={this.changeOrder}
                  searchInterview={this.searchInterview}
                />
                <ListInterviews
                  interviews={filteredInts}
                  deleteInterview={this.deleteInterview}
                  updateInfo={this.updateInfo}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
