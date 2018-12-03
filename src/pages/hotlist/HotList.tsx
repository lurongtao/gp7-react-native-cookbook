import React from 'react'

import List from '../../components/list/List'

interface Props {
  store?: any,
  navigation?: any
}

interface State {

}

export default class HostList extends React.Component<Props, State> {
  static navigationOptions = {
    title: '热卖',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100',
    },
  }

  render () {
    // alert(this.props.navigation.getParam('id'))
    return <List start={0} count={20}></List>
  }
}