import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router'
import {logout} from '../actions/user';

class Home extends React.Component {
    render() {
        let headerLinks = [];

        if (this.props.currentUser) {
            headerLinks.push(<li key='photos'><a>My favorite photos</a></li>);
            headerLinks.push(<li key='profile'><a>Profile</a></li>);
            headerLinks.push(<li key='logout' onClick={this.logout.bind(this)}><a>Logout</a></li>);
        } else {
            headerLinks.push(<li key='login'><Link to='/login'>Login</Link></li>);
        }

        return (
            <div>
                <nav id="home-nav" className="m-b-20 indigo">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo m-l-20">Great Photos</a>
                        <ul className="right hide-on-med-and-down">
                            {headerLinks}
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
                <footer className="page-footer indigo">
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }

    logout() {
        this.props.dispatch(logout());
    }
}

function mapStateToProps(state) {
    return state.get('user').toJS();
}

export default connect(mapStateToProps)(Home);
