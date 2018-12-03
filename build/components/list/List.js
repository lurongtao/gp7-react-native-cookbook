var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import { inject, observer } from 'mobx-react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './styles';
let List = class List extends React.Component {
    render() {
        const listData = this.props.store.list.listData;
        const data = listData.slice(this.props.start, this.props.count);
        return (React.createElement(View, { style: styles.better }, data.length > 0 ? (React.createElement(FlatList, { data: data, style: styles.betterWrapper, renderItem: ({ item, index }) => (React.createElement(View, null,
                React.createElement(View, { style: styles.betterImgWrapper },
                    React.createElement(Image, { resizeMode: 'cover', style: { height: '100%' }, source: { uri: item.img } })),
                React.createElement(View, { style: styles.betterTitle },
                    React.createElement(Text, { style: { fontSize: 18 } }, item.name)),
                React.createElement(View, { style: styles.betterHot },
                    React.createElement(Text, { style: { color: '#777777' } },
                        item.all_click,
                        "\u6D4F\u89C8 ",
                        item.favorites,
                        "\u6536\u85CF")))) })) : null));
    }
};
List = __decorate([
    inject('store'),
    observer
], List);
export default List;
//# sourceMappingURL=List.js.map