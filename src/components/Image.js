import React from 'react';

class Image extends React.Component {
    constructor() {
        super();

        this.state = {src: ''};
    }
    
    componentWillMount() {
        let {category, imageWidth, imageHeight} = this.props,
            src = this.props.src || 'https://source.unsplash.com/',
            self = this;

        if (category) {
            src+=`category/${category}/`
        } else {
            src+='random/';
        }

        if (imageWidth && imageHeight) {
            src+=`${imageWidth}x${imageHeight}/`
        }

        let xhr = new XMLHttpRequest();
        xhr.open( 'GET', src, true );

        xhr.responseType = 'arraybuffer';

        xhr.onload = function( e ) {
            let arrayBufferView = new Uint8Array( this.response );
            let blob = new Blob( [ arrayBufferView ], { type: 'image/jpeg' } );
            let urlCreator = window.URL || window.webkitURL;
            let imageUrl = urlCreator.createObjectURL( blob );
            self.setState({src: imageUrl})
        };

        xhr.send();
    }

    render() {
        return (
            <img src={this.state.src} {...this.props} width='500' height='500'/>
        )
    }
}

export default Image;