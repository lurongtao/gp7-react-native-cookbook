var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import List from '../../components/list/List';
import styles from './styles.js';
import Swiper from 'react-native-swiper';
let componentName = class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCateList: [],
            list: []
        };
    }
    render() {
        const listData = this.props.store.list.listData;
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: styles.swiperWrapper }, listData.length > 0
                ? (React.createElement(Swiper, { autoplay: true }, listData.slice(0, 3)
                    .map((v, i) => {
                    return (React.createElement(View, { key: i, style: styles.swiperSlide },
                        React.createElement(Image, { source: { uri: v.img }, style: { width: '100%', height: '100%' } })));
                })))
                : null),
            React.createElement(View, { style: styles.hotCateContainer },
                this.state.hotCateList.slice(0, 11).map((v, i) => {
                    return (React.createElement(View, { key: i, style: styles.hotCateItem },
                        React.createElement(TouchableOpacity, { onPress: this._onPressHotCate.bind(this, i) },
                            React.createElement(View, { style: styles.hotCateImgWrap },
                                React.createElement(Image, { source: { uri: v.img }, style: styles.hotCateImg })),
                            React.createElement(View, { style: styles.hotCateTextWrap },
                                React.createElement(Text, { style: styles.hotCateText }, v.title)))));
                }),
                React.createElement(View, { style: styles.hotCateLastItem },
                    React.createElement(View, { style: styles.hotCateTextWrap },
                        React.createElement(Text, { style: styles.hotCateText }, "\u66F4\u591A...")))),
            React.createElement(List, { start: 0, count: 10 })));
    }
    componentDidMount() {
        fetch('https://ik9hkddr.qcloud.la/mock/cookbook-category.json')
            .then(response => response.json())
            .then(result => {
            this.setState({
                hotCateList: result.data.category['热门']
            });
        });
        // fetch('https://ik9hkddr.qcloud.la/mock/cookbook-list.json')
        //   .then(response => response.json())
        //   .then(result => {
        //     this.setState({
        //       list: result.data
        //     })
        //   })
    }
    _onPressHotCate(id) {
        this.props.navigation.navigate('HotList', {
            id
        });
    }
};
componentName = __decorate([
    inject('store'),
    observer
], componentName);
export default componentName;
//# sourceMappingURL=CookBook.js.map