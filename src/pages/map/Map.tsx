import React, { Component, Fragment } from 'react'

import { WebView } from 'react-native'

export default class Map extends Component {
  render() {
    return (
      <Fragment>
        <WebView
          source={{uri: 'https://ik9hkddr.qcloud.la/mock/food.html'}}
          style={{width: '100%', flex: 1}}
        ></WebView>
        <WebView
          source={{uri: 'https://www.baidu.com'}}
          style={{width: '100%', flex: 1}}
        ></WebView>
      </Fragment>
    )
  }
}
