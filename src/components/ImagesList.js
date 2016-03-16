import React from 'react';
import Image from './Image';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {addItemsToList} from '../actions/imagesList';
import { connect } from 'react-redux';

let Masonry = require('masonry-layout');


const ImagesList = React.createClass({
    componentDidMount: function () {
        let grid = document.querySelector('.grid');

        this.msnry = new Masonry(grid, {
            itemSelector: '.grid-item',
            percentPosition: true,
            gutter: 12,
            transitionDuration: 0
        });

        $(document).scroll(this.onScroll);

        this.loadMore();
    },


    onScroll: function () {
        let $el = $(ReactDOM.findDOMNode(this)),
            children = $el.children(),
            triggeredChild = children.eq(children.length / 2);

        if (this.elementInWindow(triggeredChild)) {
            this.loadMore();
        }
    },

    /**
     * Проверяет находится ли элемент на экране
     * @param elem
     * @returns {boolean}
     */
    elementInWindow: function (elem) {
        let docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();
    
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    },

    componentDidUpdate: function (prevProps) {
        if (prevProps.list.length < this.props.list.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    },

    loadMore: function () {
        let dispatch = this.props.dispatch,
            list = [];

        for(let i = 0;i < this.props.pageSize;i++) {
            list.push(this.renderItem());
        }

        dispatch(addItemsToList(list));
    },

    renderItem: function () {
        return <Image className="grid-item" onLoad={this.onImageLoad} key={Math.random().toString(36)}/>;
    },

    onImageLoad: function () {
        this.msnry.layout();
    },

    render() {
        return (
            <div className="grid">
                {this.props.list}
            </div>
        )
    }
});

function mapStateToProps(state) {
    return state.get('home').get('imagesList').toJS();
}

export default connect(mapStateToProps)(ImagesList);