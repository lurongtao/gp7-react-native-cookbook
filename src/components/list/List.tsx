import React from 'react'
import { inject, observer } from 'mobx-react'

import {
  View, Text, ScrollView, FlatList, Image
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
    const data = listData.slice(this.props.start, this.props.count)
    return (
      <View style={styles.better}>
        {
          data.length > 0 ? (<FlatList
            data={data}
            style={styles.betterWrapper}
            renderItem={({item,index}) => (
              <View>
                <View style={styles.betterImgWrapper}>
                  <Image resizeMode={'cover'} style={{height: '100%'}} source={{uri: item.img}}></Image>
                </View>
                <View style={styles.betterTitle}><Text style={{fontSize: 18}}>{item.name}</Text></View>
                <View style={styles.betterHot}><Text style={{color: '#777777'}}>{item.all_click}浏览 {item.favorites}收藏</Text></View>
              </View>
            )}
          >
          </FlatList>) : null
        }
      </View>
      
    )
  }
}