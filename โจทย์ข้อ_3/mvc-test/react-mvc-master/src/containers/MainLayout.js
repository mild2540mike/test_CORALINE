import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';

import { Container, Label } from 'reactstrap';
// import logo from '../assets/img/revel-soft-logo-new.png'
import routes from '../routes';
class DefaultLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: true,
      user_login: JSON.parse(localStorage.getItem('user_login'))
    }
  }
  async componentDidMount() {
  }

  onLogout(e) {
    e.preventDefault()
    localStorage.removeItem('user_login');
    window.location.reload()
  }

  showMenu(e) {
    e.preventDefault();
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render() {
    const { user_login } = this.state
    return (
      <div className="app">
        <div className="app-header navbar">
          <div class="app-header-sub" >
            <ul class="ml-auto navbar-nav" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingRight: '50px' }}>
              <div >
             
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown"  role="button" aria-haspopup="true" aria-expanded="false">
                    {user_login != null ? user_login.user_name + '  ' + user_login.user_lastname : null}
                    <i className="fa fa-user"></i>
                  </a>
                    <button type="button" class="dropdown-item" onClick={e => this.onLogout(e)}><i class="fa fa-lock"></i>  Logout</button>
            
              </div>
            </ul>
          </div>
        </div>
        <div className={"d-flex " + (this.state.toggled ? "" : "toggled")} id="wrapper">
          {/* <------Menu------> */}
          <div id="sidebar-wrapper">
            <div class="sidebar-manu-top">
              <a class="active div-logo" href="#/" >
                {/* <img src={logo} alt="#" class="navbar-brand-full img-logo" /> */}
              </a>
              <div class="text-logo" >
                <strong class="title-menu">Welcome</strong>
              </div>
              <button class="navbar-toggler" type="button" onClick={e => this.showMenu(e)}>
                <span class="fa fa-bars"></span>
              </button>
            </div>
            <div class="sidebar-heading"> </div>
            <div class="list-group list-group-flush">
              <div className="scrollbar-container">
                <div class="sidebar-heading sidebar-manu">Menu </div>
                <div class="sidebar-manu-lsit">
                  <Link to="/user" class="list-group-item list-group-item-action  sidebar-list">
                    <i class="fa fa-user-circle-o"></i>
                    <Label className="sidebar-manu-lsit-text"> User </Label>
                  </Link>
                  {/* <Link to="/news" class="list-group-item list-group-item-action  sidebar-list">
                    <i class="fa fa-newspaper-o"></i>
                    <Label className="sidebar-manu-lsit-text"> News </Label>
                  </Link>
                  <Link to="/shop" class="list-group-item list-group-item-action  sidebar-list">
                    <i class="fa fa-shopping-cart"></i>
                    <Label className="sidebar-manu-lsit-text"> Shop </Label>
                  </Link> */}
                </div>
                <div class="sidebar-heading sidebar-manu">Menu </div>
              </div>
            </div>
          </div>
          {/* <------Menu------> */}
          {/* <------Content------> */}
          <div id="page-content-wrapper">
            <div class="container-fluid">
              <main className="main">
                <Container fluid>
                  <Suspense fallback={null}>
                    <Switch>
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                              <route.component {...props} />
                            )} />
                        ) : (null);
                      })}
                      <Redirect from="/" to="/" />
                    </Switch>
                  </Suspense>
                </Container>
              </main>
            </div>
          </div>
          {/* <------Content------> */}
        </div>
      </div>
    );
  }
}



export default DefaultLayout;

