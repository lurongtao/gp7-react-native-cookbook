import React, { Component } from 'react'

import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './styles.js'

import Swiper from 'react-native-swiper';

const Img = require('../../../assets/images/swiper-1.png')

interface Props {

}

interface State {
  hotCateList: Array<any>
}

export default class componentName extends Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      hotCateList: []
    }
  }

  render() {
    return (
      <View>
        <View style={styles.swiperWrapper}>
          <Swiper>
            <View style={styles.swiperSlide}>
              <Text style={styles.swiperText}>Hello Swiper</Text>
            </View>
            <View style={styles.swiperSlide}>
              <Text style={styles.swiperText}>Beautiful</Text>
            </View>
            <View style={styles.swiperSlide}>
              <Text style={styles.swiperText}>And simple</Text>
            </View>
          </Swiper>
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
      </View>
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
  }
}
