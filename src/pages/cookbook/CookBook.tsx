import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native'

import List from '../../components/list/List'

import styles from './styles.js'

import Swiper from 'react-native-swiper'

import _ from 'lodash'

interface Props {
  store?: any,
  navigation?: any
}

interface State {
  hotCateList: Array<any>
  list: Array<any>
}

@inject('store')
@observer
export default class componentName extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      hotCateList: [],
      list: []
    }
  }

  render() {
    const listData = this.props.store.list.listData
    return (
      <ScrollView>
        <View style={styles.swiperWrapper}>
          {
            listData.length > 0
              ? (
                  <Swiper autoplay={true}>
                    {
                      listData.slice(0, 3)
                        .map((v:any, i:number) => {
                          return (
                            <View key={i} style={styles.swiperSlide}>
                              <Image source={{uri: v.img}} style={{width: '100%', height: '100%'}}></Image>
                            </View>
                          )
                        })
                    }
                  </Swiper>
                )
              : null
          }
          
        </View>
        <View style={styles.hotCateContainer}>
        {
          this.state.hotCateList.slice(0, 11).map((v, i) => {
            return (
              <View key={i} style={styles.hotCateItem}>
                <TouchableOpacity onPress={this._onPressHotCate.bind(this, i)}>
                  <View style={styles.hotCateImgWrap}>
                    <Image source={{uri: v.img}} style={styles.hotCateImg}></Image>
                  </View>
                  <View style={styles.hotCateTextWrap}>
                    <Text style={styles.hotCateText}>{v.title}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
          <View style={styles.hotCateLastItem}>
            <View style={styles.hotCateTextWrap}>
              <Text style={styles.hotCateText}>更多...</Text>
            </View>
          </View>
        </View>
        <List start={0} count={10}></List>
      </ScrollView>
    )
  }

  componentDidMount () {
    fetch('https://ik9hkddr.qcloud.la/mock/cookbook-category.json')
      .then(response => response.json())
      .then(result => {
        this.setState({
          hotCateList: result.data.category['热门']
        })
      })

    // fetch('https://ik9hkddr.qcloud.la/mock/cookbook-list.json')
    //   .then(response => response.json())
    //   .then(result => {
    //     this.setState({
    //       list: result.data
    //     })
    //   })
  }

  _onPressHotCate (id: number) {
    this.props.navigation.navigate('HotList', {
      id
    })
  }
}
