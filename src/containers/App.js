/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {
    Component
} from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main';


class App extends Component {
    render() {
        const {actions} = this.props;
        return <Main actions={actions}>{this.props.children}</Main>;
    }
}


export default connect()(App);
