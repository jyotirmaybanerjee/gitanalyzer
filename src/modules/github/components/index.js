// @flow

import React, {Component, Fragment} from 'react';
import {Button, Col, Glyphicon, Grid, Row} from 'react-bootstrap';

class GitHub extends Component {
  props: {
    userDetails: ?User,
    username: ?string,
    followers: Array<Follow>,
    following: Array<Follow>,
    // repos: Array,
    // onFetchUserDetails: () => void,
    onFetchUserDetails: (username: string) => User,
  };

  componentWillMount() {
    const {username = '', onFetchUserDetails} = this.props;
    onFetchUserDetails();
  }

  render() {
    const {username = '', userDetails, followers = [], following = []} = this.props;
    return (
      <Fragment>
        <Row>
          <Col md={3}>
            <div className="profile-sidebar">
              <div className="profile-userpic">
      					<img
                  src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg"
                  className="img-responsive"
                  alt=""
                />
      				</div>
      				<div className="profile-usertitle">
      					<div className="profile-usertitle-name">
      						Marcus Doe
      					</div>
      					<div className="profile-usertitle-job">
      						Developer
      					</div>
    				  </div>
      				<div className="profile-userbuttons">
      					<button type="button" className="btn btn-success btn-sm">Follow</button>
      					<button type="button" className="btn btn-danger btn-sm">Message</button>
      				</div>
  				    <div className="profile-usermenu">
  					     <ul className="nav">
        						<li className="active">
        							<a href="#">
        							<i className="glyphicon glyphicon-home"></i>
        							Overview </a>
        						</li>
        						<li>
        							<a href="#">
        							<i className="glyphicon glyphicon-user"></i>
        							Account Settings </a>
        						</li>
        						<li>
        							<a href="#" target="_blank">
        							<i className="glyphicon glyphicon-ok"></i>
        							Tasks </a>
        						</li>
  						      <li>
        							<a href="#">
          							<i className="glyphicon glyphicon-flag"></i>
          							Help
                      </a>
  						      </li>
					        </ul>
				        </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="profile-content">
			           Some user related content goes here...
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default GitHub;
