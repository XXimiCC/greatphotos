import React from 'react';
import { connect } from 'react-redux';
import ImagesList from '../components/ImagesList';

class Home extends React.Component {
    render() {
        return (
            <div>
                <nav id="home-nav" className="m-b-20 indigo">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo m-l-20">Great Photos</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a>My favorite photos</a></li>
                            <li><a>Profile</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Home;
