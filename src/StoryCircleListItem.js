import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const StoryCircleListItem = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.avatarWrapper, !isPressed
        ? {
          borderColor:  'red',
        }
        : {
          borderColor:  'grey',
        },]}>
        <Image source={require('./assets/images/storyImages/photo_nine.jpg')} style={styles.imageStyle} />
      </TouchableOpacity>
      <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.text}>
          {'Manish Pardhan'}
        </Text>
    </View>
  )
}

export default StoryCircleListItem

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    marginRight: 10,
  },
  avatarWrapper: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 100,
    height: 64,
    width: 64,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 100
  },
  text: {
    marginTop: 3,
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 11,
  },
})