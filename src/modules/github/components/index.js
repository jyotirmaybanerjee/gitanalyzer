// @flow

import React, {Component, Fragment} from 'react';
import {Col, Glyphicon, Label, Row} from 'react-bootstrap';

class GitHub extends Component {
  props: {
    userDetails: ?User,
    username: ?string,
    followers: Array<Follow>,
    following: Array<Follow>,
    repos: Array<Repo>,
    doFetchUserDetails: (username: string) => User,
  };

  componentWillMount() {
    const {doFetchUserDetails} = this.props;
    doFetchUserDetails('jyotirmaybanerjee');
  }

  render() {
    const {userDetails, followers = [], following = []} = this.props;
    return (
      <Fragment>
        <Row className="profile">
          <Col md={3}>
            <div className="sidebar">
                <div className="userpic">
                  <img
                      src={userDetails.avatar_url}
                      className="img-responsive"
                      alt=""
                    />
                </div>
                <div className="usertitle">
                    <div className="name">
                        {userDetails.name}
                    </div>
                    <div className="job-desc">{userDetails.bio}</div>
                </div>
                <div className="follow-buttons">
                    <Label bsStyle="success">Followers: {userDetails.followers}</Label>{' '}
                    <Label bsStyle="info">Following: {userDetails.following}</Label>
                </div>
                <div className="usermenu">
                    <ul className="nav">
                        <li className="active">
                            <a href="/">
                                <Glyphicon glyph="home" /> Home
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Glyphicon glyph="user" /> Followers
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Glyphicon glyph="ok" /> Following
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <Glyphicon glyph="flag" /> Repos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="content">
                Some user related content goes here...
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default GitHub;
