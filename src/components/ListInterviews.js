import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListInterviews extends Component {
  render() {
    return (
      <div className="interview-list item-list mb-3">
        {this.props.interviews.map(item => (
          <div className="int-item col media py-3" key={item.intId}>
            <div className="mr-3">
              <button
                className="int-delete btn btn-sm btn-danger"
                onClick={() => this.props.deleteInterview(item)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="int-info media-body">
              <div className="int-head d-flex">
                <span
                  className="int-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'companyName',
                      e.target.innerText,
                      item.intId
                    )
                  }
                >
                  {item.intId}--{item.companyName}
                </span>
                <span className="int-date ml-auto">
                  <Moment
                    date={item.intDate}
                    parse="YYYY-MM-dd hh:mm"
                    format="DD-MMM-YYYY h:mma"
                  />
                </span>
              </div>

              <div className="int-name">
                <span className="label-item">Interviewer: </span>
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={e =>
                    this.props.updateInfo(
                      'intName',
                      e.target.innerText,
                      item.intId
                    )
                  }
                >
                  {item.intName}
                </span>
              </div>
              <div
                className="int-notes"
                contentEditable
                suppressContentEditableWarning
                onBlur={e =>
                  this.props.updateInfo(
                    'intNotes',
                    e.target.innerText,
                    item.intId
                  )
                }
              >
                {item.intNotes}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListInterviews;
