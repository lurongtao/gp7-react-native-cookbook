import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles.js';
import Swiper from 'react-native-swiper';
const Img = require('../../../assets/images/swiper-1.png');
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotCateList: []
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(View, { style: styles.swiperWrapper },
                React.createElement(Swiper, null,
                    React.createElement(View, { style: styles.swiperSlide },
                        React.createElement(Text, { style: styles.swiperText }, "Hello Swiper")),
                    React.createElement(View, { style: styles.swiperSlide },
                        React.createElement(Text, { style: styles.swiperText }, "Beautiful")),
                    React.createElement(View, { style: styles.swiperSlide },
                        React.createElement(Text, { style: styles.swiperText }, "And simple")))),
            React.createElement(View, { style: styles.hotCateContainer },
                this.state.hotCateList.slice(0, 11).map((v, i) => {
                    return (React.createElement(View, { key: i, style: styles.hotCateItem },
                        React.createElement(View, { style: styles.hotCateImgWrap },
                            React.createElement(Image, { source: { uri: v.img }, style: styles.hotCateImg })),
                        React.createElement(View, { style: styles.hotCateTextWrap },
                            React.createElement(Text, { style: styles.hotCateText }, v.title))));
                }),
                React.createElement(View, { style: styles.hotCateLastItem },
                    React.createElement(View, { style: styles.hotCateTextWrap },
                        React.createElement(Text, { style: styles.hotCateText }, "\u66F4\u591A..."))))));
    }
    componentDidMount() {
        fetch('https://ik9hkddr.qcloud.la/mock/cookbook-category.json')
            .then(response => response.json())
            .then(result => {
            this.setState({
                hotCateList: result.data.category['热门']
            });
        });
    }
}
//# sourceMappingURL=CookBook.js.map