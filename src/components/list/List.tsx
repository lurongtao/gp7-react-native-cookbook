import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  View, Text, ScrollView,
  Image
} from 'react-native'

import styles from './styles'

interface Props {
  store?: any,
  start?: number,
  count?: number
}

interface State {
  
}

@inject('store')
@observer
export default class List extends React.Component<Props, State> {
  render () {
    const listData = this.props.store.list.listData
    return (
      <ScrollView>
        <View style={styles.better}>
          {
            listData.slice(this.props.start, this.props.count)
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
}