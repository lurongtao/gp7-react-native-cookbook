var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Text, View, TouchableOpacity, Button, Image, Switch, AsyncStorage } from 'react-native';
import { Camera, Permissions } from 'expo';
let Profile = class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isShowCamera: false,
            uri: ''
        };
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return React.createElement(View, null);
        }
        else if (hasCameraPermission === false) {
            return React.createElement(Text, null, "No access to camera");
        }
        else {
            return (React.createElement(View, { style: { flex: 1 } }, !this.state.isShowCamera
                ? (React.createElement(View, null,
                    React.createElement(View, null,
                        React.createElement(Image, { source: { uri: this.state.uri }, style: { width: 200, height: 200 } })),
                    React.createElement(Button, { onPress: this.takePicture.bind(this), title: "\u62CD\u7167", color: "#841584", accessibilityLabel: "Learn more about this purple button" }),
                    React.createElement(View, null,
                        React.createElement(Text, null, "\u7F8E\u98DF\u5730\u56FE\uFF1A"),
                        React.createElement(Switch, { value: this.props.store.home.isShowMap, onValueChange: this.changeValue.bind(this) }))))
                : (React.createElement(Camera, { ref: (ref) => { this.camera = ref; }, style: { flex: 1, flexDirection: 'row' }, type: this.state.type },
                    React.createElement(View, { style: {
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        } },
                        React.createElement(TouchableOpacity, { style: {
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                });
                            } },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                ' ',
                                "Flip",
                                ' '))),
                    React.createElement(View, { style: {
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        } },
                        React.createElement(TouchableOpacity, { style: {
                                flex: 1,
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => __awaiter(this, void 0, void 0, function* () {
                                if (this.camera) {
                                    let photo = yield this.camera.takePictureAsync();
                                    this.setState({
                                        isShowCamera: false,
                                        uri: photo.uri
                                    });
                                }
                            }) },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                ' ',
                                "\u5F00\u59CB\u62CD\u7167",
                                ' ')))))));
        }
    }
    takePicture() {
        this.setState({
            isShowCamera: true
        });
    }
    changeValue(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield AsyncStorage.setItem('isShowMap', `${value}`);
            this.props.store.home.switchTab(value);
        });
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });
        });
    }
};
Profile = __decorate([
    inject('store'),
    observer
], Profile);
export default Profile;
//# sourceMappingURL=Profile.js.map