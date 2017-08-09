import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FriendRequestTableTr from './FriendRequestTableTr';

class FriendRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container page-content">
          <div className="row">

            {/* debut de la list */}
            <div className="col">
              <div className="widget">
                <div className="table-responsive">

                  <table className="table user-list">

                    <thead>
                      <tr>
                        <th><span>User</span></th>
                        <th><span>Created</span></th>
                        <th className="text-center"><span>Status</span></th>
                        <th><span>Email</span></th>
                        <th>&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      <FriendRequestTableTr />
                      <FriendRequestTableTr />
                      <FriendRequestTableTr />
                      <FriendRequestTableTr />
                    </tbody>


                  </table>
                </div>

              </div>
            </div>


          </div>

        </div>
        <Footer />
      </div>

    );
  }
}

export default FriendRequest;
