import React from 'react';
import Header from './template/Header'
import Footer from "./Footer";
import HomeLeftLinks from './HomeLeftLinks'
import HomeCenterPosts from './HomeCenterPosts'

class HomePostStateForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="box profile-info n-border-top">
            <form>
                <textarea className="form-control input-lg p-text-area" rows="2" placeholder="Whats in your mind today?"></textarea>
            </form>
            <div className="box-footer box-form">
                <button type="button" className="btn btn-azure pull-right">Post</button>
                <ul className="nav nav-pills">
                    <li><a href="#"><i className="fa fa-map-marker"></i></a></li>
                    <li><a href="#"><i className="fa fa-camera"></i></a></li>
                    <li><a href="#"><i className=" fa fa-film"></i></a></li>
                    <li><a href="#"><i className="fa fa-microphone"></i></a></li>
                </ul>
            </div>
        </div>

    );
  }
}

export default HomePostStateForm;
