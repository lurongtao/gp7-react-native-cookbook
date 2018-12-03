import React from 'react';
import { Provider } from 'mobx-react';
import Home from './pages/home/Home';
import HotList from './pages/hotlist/HotList';
import store from './store';
import { createStackNavigator } from 'react-navigation';
const RootStack = createStackNavigator({
    Home,
    HotList
}, {
    initialRouteName: 'Home',
});
export default class componentName extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(RootStack, null)));
    }
    componentDidMount() {
        store.list.getListData();
    }
}
//# sourceMappingURL=App.js.map