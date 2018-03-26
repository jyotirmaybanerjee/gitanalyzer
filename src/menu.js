import React, {Component} from 'react';
import {Button, Col, FormGroup, FormControl, MenuItem, Nav, Navbar, NavDropdown,
  NavItem, Row} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import {NavLink} from 'react-router-dom';

export class Menu extends Component {
  props: {
    onSearch: (username: string) => User,
  };

  state = {
    searchString: ''
  }

  onSearch = () => {
    const {onSearch} = this.props;
    console.log('searchString- ', this.state.searchString);
    onSearch(this.state.searchString);
  }

  render() {
    const {onSearch} = this.props;
    return (
      <Row>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Jyo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer activeClassName="nav-menu-active" exact to="/grid">
                <NavItem eventKey={1}>
                  <span>Grid</span>
                </NavItem>
              </LinkContainer>
              <LinkContainer activeClassName="nav-menu-active" exact to="/git">
                <NavItem eventKey={2}>
                  <span>Git</span>
                </NavItem>
              </LinkContainer>
            </Nav>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search"
                  onChange={(e) => this.setState({searchString: e.target.value})}
                />
              </FormGroup>{' '}
              <Button onClick={this.onSearch}>
                Submit
              </Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    );
  }
}
