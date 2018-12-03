import React from 'react'

import { observer, inject } from 'mobx-react'

import TabNavigator from 'react-native-tab-navigator'

import {
  View,
  Text,
  Image,
  AsyncStorage
} from 'react-native'

import CookBook from '../cookbook/CookBook'
import List from '../../components/list/List'
import Map from '../map/Map'
import Profile from '../profile/Profile'

import styles from './styles'
import { observable } from 'mobx';

const cookBook = require('../../../assets/images/cookbook.png')
const cookBookActive = require('../../../assets/images/cookbook-active.png')
const menu = require('../../../assets/images/menu.png')
const menuActive = require('../../../assets/images/menu-active.png')
const location = require('../../../assets/images/location.png')
const locationActive = require('../../../assets/images/location-active.png')
const more = require('../../../assets/images/more.png')
const moreActive = require('../../../assets/images/more-active.png')

interface Props {
  store?: any,
  navigation?: any
}

interface State {
  selectedTab: string
}

@inject('store')
@observer
export default class Home extends React.Component<Props, State> {
  static navigationOptions = {
    title: '美食大全',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: '100',
    },
  }

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
          <CookBook navigation={this.props.navigation}></CookBook>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'category'}
          title="热卖"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Image style={styles.imgSize} source={menu} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={menuActive} />}
          onPress={() => this.setState({ selectedTab: 'category' })}>
          <List start={0} count={20}></List>
        </TabNavigator.Item>
        {
          this.props.store.home.isShowMap
            ? (
              <TabNavigator.Item
              selected={this.state.selectedTab === 'map'}
              title="地图"
              titleStyle={styles.titleStyle}
              selectedTitleStyle={styles.selectedTitleStyle}
              renderIcon={() => <Image style={styles.imgSize} source={location} />}
              renderSelectedIcon={() => <Image style={styles.imgSize} source={locationActive} />}
              onPress={() => this.setState({ selectedTab: 'map' })}>
              <Map></Map>
            </TabNavigator.Item>
            )
            : null
        }
        <TabNavigator.Item
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          selected={this.state.selectedTab === 'profile'}
          title="更多"
          renderIcon={() => <Image style={styles.imgSize} source={more} />}
          renderSelectedIcon={() => <Image style={styles.imgSize} source={moreActive} />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <Profile></Profile>
        </TabNavigator.Item>
      </TabNavigator>
    )
  }

  async componentDidMount () {
    let value = await AsyncStorage.getItem('isShowMap') === 'true' ? true : false
    this.props.store.home.switchTab(value)
  }
}