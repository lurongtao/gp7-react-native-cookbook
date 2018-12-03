var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { observer, inject } from 'mobx-react';
import TabNavigator from 'react-native-tab-navigator';
import { Image, AsyncStorage } from 'react-native';
import CookBook from '../cookbook/CookBook';
import List from '../../components/list/List';
import Map from '../map/Map';
import Profile from '../profile/Profile';
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
                React.createElement(CookBook, { navigation: this.props.navigation })),
            React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'category', title: "\u70ED\u5356", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: menu }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: menuActive }), onPress: () => this.setState({ selectedTab: 'category' }) },
                React.createElement(List, { start: 0, count: 20 })),
            this.props.store.home.isShowMap
                ? (React.createElement(TabNavigator.Item, { selected: this.state.selectedTab === 'map', title: "\u5730\u56FE", titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: location }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: locationActive }), onPress: () => this.setState({ selectedTab: 'map' }) },
                    React.createElement(Map, null)))
                : null,
            React.createElement(TabNavigator.Item, { titleStyle: styles.titleStyle, selectedTitleStyle: styles.selectedTitleStyle, selected: this.state.selectedTab === 'profile', title: "\u66F4\u591A", renderIcon: () => React.createElement(Image, { style: styles.imgSize, source: more }), renderSelectedIcon: () => React.createElement(Image, { style: styles.imgSize, source: moreActive }), onPress: () => this.setState({ selectedTab: 'profile' }) },
                React.createElement(Profile, null))));
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            let value = (yield AsyncStorage.getItem('isShowMap')) === 'true' ? true : false;
            this.props.store.home.switchTab(value);
        });
    }
};
Home.navigationOptions = {
    title: '美食大全',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: '100',
    },
};
Home = __decorate([
    inject('store'),
    observer
], Home);
export default Home;
//# sourceMappingURL=Home.js.map