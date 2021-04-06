import React, { Component } from 'react';

class SearchInterviews extends Component {
  render() {
    return (
      <div className="search-interviews row justify-content-center my-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              id="SearchInts"
              type="text"
              className="form-control"
              aria-label="Search Interviews"
              onChange={e => this.props.searchInterview(e.target.value)}
            />
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort by: <span className="caret" />
              </button>

              <div className="sort-menu dropdown-menu dropdown-menu-right">
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'companyName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('companyName', this.props.orderDir)
                  }
                  href="#"
                >
                  Company Name
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'intDate' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('intDate', this.props.orderDir)
                  }
                  href="#"
                >
                  Date
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderBy === 'intName' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder('intName', this.props.orderDir)
                  }
                  href="#"
                >
                  Interviewer Name
                </button>
                <div role="separator" className="dropdown-divider" />
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'asc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'asc')
                  }
                  href="#"
                >
                  Asc
                </button>
                <button
                  className={
                    'sort-by dropdown-item ' +
                    (this.props.orderDir === 'desc' ? 'active' : '')
                  }
                  onClick={e =>
                    this.props.changeOrder(this.props.orderBy, 'desc')
                  }
                  href="#"
                >
                  Desc
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchInterviews;
