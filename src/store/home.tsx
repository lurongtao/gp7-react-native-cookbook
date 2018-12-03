import { observable, action } from 'mobx'
import { AsyncStorage } from 'react-native'

class List {
  // @observable isShowMap: any = (async () => { await AsyncStorage.getItem('isShowMap') === 'true' ? true : false})()
  @observable isShowMap: boolean = false

  @action
  switchTab (info: boolean) {
    this.isShowMap = info
  }
}

export default new List()