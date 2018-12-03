import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import { Text, View, TouchableOpacity, Button, Image, Switch, AsyncStorage } from 'react-native';
import { Camera, Permissions } from 'expo'

interface Props {
  store?: any
}

interface State {
  hasCameraPermission?: any,
  type?: any,
  isShowCamera: boolean,
  uri: string
}

@inject('store')
@observer
export default class Profile extends Component<Props, State> {
  public camera: any

  constructor (props: Props) {
    super(props)
    this.state = {
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      isShowCamera: false,
      uri: ''
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {
            !this.state.isShowCamera 
              ? (
                <View>
                  <View>
                    <Image source={{uri: this.state.uri}} style={{width: 200, height: 200}}></Image>
                  </View>
                  <Button
                    onPress={this.takePicture.bind(this)}
                    title="拍照"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  ></Button>
                  <View>
                    <Text>美食地图：</Text>
                    <Switch
                      value={this.props.store.home.isShowMap}
                      onValueChange={this.changeValue.bind(this)}
                    ></Switch>
                  </View>
                </View>
              )
              : (
                <Camera 
                  ref={(ref:any) => { this.camera = ref }} 
                  style={{ flex: 1, flexDirection: 'row' }} 
                  type={this.state.type}
                >
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        this.setState({
                          type: this.state.type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back,
                        });
                      }}>
                      <Text
                        style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        {' '}Flip{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}
                      onPress={async () => {
                        if (this.camera) {
                          let photo = await this.camera.takePictureAsync()
                          this.setState({
                            isShowCamera: false,
                            uri: photo.uri
                          })
                        }
                      }}>
                      <Text
                        style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        {' '}开始拍照{' '}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </Camera>
              )
          }
        </View>
      );
    }
  }

  takePicture () {
    this.setState({
      isShowCamera: true
    })
  }

  private async changeValue (value: boolean) {
    await AsyncStorage.setItem('isShowMap', `${value}`)
    this.props.store.home.switchTab(value)
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
}
