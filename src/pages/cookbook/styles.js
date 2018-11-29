import {
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  swiperWrapper: {
    height: 240
  },

  swiperSlide: {
    height: 240,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },

  swiperText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  hotCateContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    flexWrap: 'wrap'
  },

  hotCateItem: {
    width: '25%'
  },

  hotCateLastItem: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  hotCateImgWrap: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hotCateImg: {
    width: '90%',
    height: '90%',
    borderRadius: 10,
  },

  hotCateTextWrap: {
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hotCateText: {
    fontSize: 12
  }

})