import React, { Component } from 'react'

import { observer, inject } from 'mobx-react'

import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native'

import styles from './styles.js'

import Swiper from 'react-native-swiper'

import _ from 'lodash'

interface Props {
  store?: any
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
                <View style={styles.hotCateImgWrap}>
                  <Image source={{uri: v.img}} style={styles.hotCateImg}></Image>
                </View>
                <View style={styles.hotCateTextWrap}>
                  <Text style={styles.hotCateText}>{v.title}</Text>
                </View>
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
        <View style={styles.better}>
          {
            listData.slice(0, 10)
              .map((v: any, i: any) => {
                return (
                  <View key={i} style={styles.betterWrapper}>
                    <View style={styles.betterImgWrapper}>
                      <Image resizeMode={'cover'} style={{height: '100%'}} source={{uri: v.img}}></Image>
                    </View>
                    <View style={styles.betterTitle}><Text style={{fontSize: 18}}>{v.name}</Text></View>
                    <View style={styles.betterHot}><Text style={{color: '#777777'}}>{v.all_click}浏览 {v.favorites}收藏</Text></View>
                  </View>
                )
              })
          }
        </View>
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
}
