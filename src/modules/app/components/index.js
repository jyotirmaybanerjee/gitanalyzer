import React, {Fragment} from 'react';
import {Button, Grid, Nav, Navbar, NavItem, Row} from 'react-bootstrap';

function App({children, username}) {
  return (
    <Grid>
      <Row>
        <Navbar inverse collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Github User Search</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Stream
              </NavItem>
              <NavItem eventKey={2} href="/grid">
                Grid
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
              {
                username ?
                  <span>{username}</span> : ''
              }
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Row>
      <Row>
        <div style={{marginTop: '30px'}}>{children}</div>
      </Row>
    </Grid>
  );
}

export default App;
