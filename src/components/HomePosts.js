import React from 'react';


class HomePosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box box-widget">
        <div className="box-header with-border">
          <div className="user-block">
            <img className="img-circle" src="img/Friends/guy-3.jpg" alt="User Image" />
            <span className="username"><a href="#">John Breakgrow jr.</a></span>
            <span className="description">Shared publicly - 7:30 PM Today</span>
          </div>
        </div>

        <div className="box-body" style={{ display: 'block' }}>
          <img className="img-responsive show-in-modal" src="img/Post/young-couple-in-love.jpg" alt="Photo" />
          <p>I took this photo this morning. What do you guys think?</p>
          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button>
          <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" /> Like</button>
          <span className="pull-right text-muted">127 likes - 3 comments</span>
        </div>
        <div className="box-footer box-comments" style={{ display: 'block' }}>
          <div className="box-comment">
            <img className="img-circle img-sm" src="img/Friends/guy-2.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
                          Maria Gonzales
                <span className="text-muted pull-right">8:03 PM Today</span>
              </span>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
            </div>
          </div>

          <div className="box-comment">
            <img className="img-circle img-sm" src="img/Friends/guy-3.jpg" alt="User Image" />
            <div className="comment-text">
              <span className="username">
                          Luna Stark
                <span className="text-muted pull-right">8:03 PM Today</span>
              </span>
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
            </div>
          </div>
        </div>
        <div className="box-footer" style={{ display: 'block' }}>
          <form action="#" method="post">
            <img className="img-responsive img-circle img-sm" src="img/Friends/guy-3.jpg" alt="Alt Text" />
            <div className="img-push">
              <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default HomePosts;
