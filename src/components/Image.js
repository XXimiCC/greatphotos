import React from 'react';

class Image extends React.Component {
    constructor() {
        super();

        this.state = {src: 'images/loader.gif'};
    }
    
    componentWillMount() {
        let {category, imageWidth, imageHeight} = this.props,
            src = this.props.src || 'https://source.unsplash.com/',
            self = this;

        if (category) {
            src+=`category/${category}/`
        } else {
            src+='random/'+Date.now()+new Date();
        }

        if (imageWidth && imageHeight) {
            src+=`${imageWidth}x${imageHeight}/`
        }

        let xhr = new XMLHttpRequest();
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