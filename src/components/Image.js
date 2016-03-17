import React from 'react';

class Image extends React.Component {
    constructor() {
        super();

        this.state = {src: null};
    }
    
    componentWillMount() {
        let {category, imageWidth, imageHeight} = this.props,
            src = this.props.src || 'https://source.unsplash.com/';

        if (category) {
            src+=`category/${category}/`
        } else {
            src+='random/'+Date.now()+new Date();
        }

        if (imageWidth && imageHeight) {
            src+=`${imageWidth}x${imageHeight}/`
        }

        this.downloadImage(src);
    }

    componentWillUnmount() {
        this.xhr.abort();
    }

    downloadImage(src) {
        let xhr = new XMLHttpRequest(),
            self = this;

        this.xhr = xhr;

        xhr.open( 'GET', src, true );
        xhr.responseType = 'arraybuffer';

        xhr.onload = function() {
            let arrayBufferView = new Uint8Array( this.response );
            let blob = new Blob( [ arrayBufferView ], { type: 'image/jpeg' } );
            let urlCreator = window.URL || window.webkitURL;
            let imageUrl = urlCreator.createObjectURL( blob );

            self.setState({src: imageUrl});
            self.props.onLoad();
        };

        xhr.onerror = this.downloadImage.bind(this, src);

        xhr.send();
    }

    render() {
        return (
            <div {...this.props}>
                <img src={this.state.src}/>
            </div>
        )
    }
}

Image.propTypes = {
    onLoad: React.PropTypes.func,
    category: React.PropTypes.string
};



export default Image;