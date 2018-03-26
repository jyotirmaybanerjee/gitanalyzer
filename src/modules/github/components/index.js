// @flow

import React, {Component, Fragment} from 'react';
import {Alert, Col, Glyphicon, Label, Row, Nav, NavItem} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';
import {Home} from './Home';
import {Followers} from './Followers';
import {Following} from './Following';
import {Repos} from './Repos';

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
    const {userDetails, followers = [], following = [], repos = []} = this.props;
    console.log('this.props- ', this.props);
    const handleSelect = () => {
        console.log('handle select');
    }
    return (
      <Fragment>
        {userDetails.message &&
          <Row>
              <Alert bsStyle="danger">
                  <a href={userDetails.documentation_url} target="_blank">{userDetails.message}</a>
              </Alert>
          </Row>
        }
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
                    <Nav bsStyle="pills" className="nav" stacked activeKey={1} onSelect={handleSelect}>
                        <LinkContainer activeClassName="nav-menu-active" exact to={`/git`}>
                            <NavItem eventKey={1}>
                                <Glyphicon glyph="home" /> Home
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer activeClassName="nav-menu-active" exact to={`/git/followers`}>
                            <NavItem eventKey={2}>
                                <Glyphicon glyph="user" /> Followers
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer activeClassName="nav-menu-active" exact to={`/git/following`}>
                            <NavItem eventKey={3}>
                                <Glyphicon glyph="ok" /> Following
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer activeClassName="nav-menu-active" exact to={`/git/repos`}>
                            <NavItem eventKey={4}>
                                <Glyphicon glyph="flag" /> Repos
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </div>
            </div>
          </Col>
          <Col md={9}>
            <div className="content">
              <Switch>
                <Route exact path="/git" component={Home} />
                <Route path="/git/followers" render={()=><Followers followers={followers} />} />
                <Route path="/git/following" render={()=><Following following={following} />} />
                <Route path="/git/repos" render={()=><Repos repos={repos} />} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default GitHub;
