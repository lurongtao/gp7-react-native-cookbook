import React from 'react'

import TabNavigator from 'react-native-tab-navigator'

import {
  View,
  Text,
  Image
} from 'react-native'

import CookBook from '../cookbook/CookBook'

import styles from './styles'

const cookBook = require('../../../assets/images/cookbook.png')
const cookBookActive = require('../../../assets/images/cookbook-active.png')
const menu = require('../../../assets/images/menu.png')
const menuActive = require('../../../assets/images/menu-active.png')
const location = require('../../../assets/images/location.png')
const locationActive = require('../../../assets/images/location-active.png')
const more = require('../../../assets/images/more.png')
const moreActive = require('../../../assets/images/more-active.png')

interface Props {
  name: string
}

interface State {
  selectedTab: string
}

export default class Home extends React.Component<Props, State> {
  constructor (props: any) {
    super(props)
    this.state = {
      selectedTab: 'home'
    }
  }
  render () {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="大全"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={cookBook} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={cookBookActive} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <CookBook></CookBook>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'category'}
          title="分类"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={menu} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={menuActive} />}
          onPress={() => this.setState({ selectedTab: 'category' })}>
          <View><Text>category</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="地图"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={location} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={locationActive} />}
          onPress={() => this.setState({ selectedTab: 'map' })}>
          <View><Text>map</Text></View>
        </TabNavigator.Item>
        <TabNavigator.Item
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          selected={this.state.selectedTab === 'profile'}
          title="更多"
          renderIcon={() => <Image style={styles.imgSize} source={more} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={moreActive} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <View><Text>profile</Text></View>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}