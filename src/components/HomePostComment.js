import React from 'react';
import request from 'superagent';

class HomePostComment extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="box-footer box-comments" style={{ display: 'block' }}>
        <div className="box-comment">
          <img className="img-circle img-sm" src="/img/Friends/guy-2.jpg" alt="User Image" />
          <div className="comment-text">
            <span className="username">
                          Maria Gonzales
              <span className="text-muted pull-right">8:03 PM Today</span>
            </span>
                        It is a long established fact that a reader will be distracted
                        by the readable content of a page when looking at its layout.
          </div>
        </div>
      </div>


    );
  }
}

export default HomePostComment;
