import React from 'react';
import Header from './Header'
import Footer from "./Footer";
import HomeLeftLinks from './HomeLeftLinks'
import HomeCenterPosts from './HomeCenterPosts'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
            <Header/>
            <div className="container page-content">
                <div className="row">
                    {/*<!-- left links -->*/}
                    <HomeLeftLinks/>
                    {/*<!-- center posts -->*/}
                    <HomeCenterPosts/>
                </div>

            </div>
            <Footer/>
        </div>

    );
  }
}

export default Home;
