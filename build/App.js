import React from 'react';
import { Provider } from 'mobx-react';
import Home from './pages/home/Home';
import store from './store';
export default class componentName extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(Home, null)));
    }
    componentDidMount() {
        store.list.getCateData();
    }
}
//# sourceMappingURL=App.js.map