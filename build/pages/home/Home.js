var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import { observer, inject } from 'mobx-react';
import TabNavigator from 'react-native-tab-navigator';
import { View, Text, Image } from 'react-native';
import CookBook from '../cookbook/CookBook';
import styles from './styles';
const cookBook = require('../../../assets/images/cookbook.png');
const cookBookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const location = require('../../../assets/images/location.png');
const locationActive = require('../../../assets/images/location-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
let Home = class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }
    render() {
        return (React.createElement(TabNavigator, null,
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'home', title: "\u5927\u5168", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: cookBook }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: cookBookActive }), onPress: () => this.setState({ selectedTab: 'home' }) },
                React.createElement(CookBook, null)),
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'category', title: "\u5206\u7C7B", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: menu }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: menuActive }), onPress: () => this.setState({ selectedTab: 'category' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "category"))),
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'map', title: "\u5730\u56FE", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: location }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: locationActive }), onPress: () => this.setState({ selectedTab: 'map' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "map"))),
            React.createElement(TabNavigator.Item, { titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, selected: this.state.selectedTab === 'profile', title: "\u66F4\u591A", renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: more }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: moreActive }), onPress: () => this.setState({ selectedTab: 'profile' }) },
                React.createElement(View, null,
                    React.createElement(Text, null, "profile")))));
    }
};
Home = __decorate([
    inject('store'),
    observer
], Home);
export default Home;
//# sourceMappingURL=Home.js.map