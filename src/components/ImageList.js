import React from 'react';
import Image from './Image';
import $ from 'jquery';

const ImageList = React.createClass({
    propTypes: {

    },

    render() {
        let list = [];

        for(let i = 0;i < 20;i++) {
            list.push(<Image />);
        }


        return (
            <div>
                {list}
            </div>
        )
    }
});

export default ImageList;