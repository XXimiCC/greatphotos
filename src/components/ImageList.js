import React from 'react';
import Image from './Image';
import ReactList from 'react-list';
let Masonry = require('masonry-layout');


const ImageList = React.createClass({
    propTypes: {

    },

    componentDidMount: function () {
        let grid = document.querySelector('.grid');

        this.msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 12
        });
    },

    onImageLoad: function () {
        this.msnry.layout();
    },

    render() {
        let list = [];

        for(let i = 0;i < 20;i++) {
            list.push(<Image className="grid-item" onLoad={this.onImageLoad} key={i}/>);
        }

        return (
            <div className="grid">
                {list}
            </div>
        )
    }
});

export default ImageList;