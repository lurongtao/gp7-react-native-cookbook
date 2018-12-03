import React from 'react';
import List from '../../components/list/List';
export default class HostList extends React.Component {
    render() {
        // alert(this.props.navigation.getParam('id'))
        return React.createElement(List, { start: 0, count: 20 });
    }
}
HostList.navigationOptions = {
    title: '热卖',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: '100',
    },
};
//# sourceMappingURL=HotList.js.map