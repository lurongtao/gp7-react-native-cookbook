var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, action } from 'mobx';
class List {
    constructor() {
        // @observable isShowMap: any = (async () => { await AsyncStorage.getItem('isShowMap') === 'true' ? true : false})()
        this.isShowMap = false;
    }
    switchTab(info) {
        this.isShowMap = info;
    }
}
__decorate([
    observable
], List.prototype, "isShowMap", void 0);
__decorate([
    action
], List.prototype, "switchTab", null);
export default new List();
//# sourceMappingURL=home.js.map