import { StyleSheet,FlatList, Image } from 'react-native'
import React from 'react'
import { StoryData } from './utils/constant'
import StoryCircleListItem from './StoryCircleListItem'
const StoryCircleListView = () => {

  return (
    <>
    <FlatList
      data={StoryData}
      renderItem={({item,index})=>(
        <StoryCircleListItem item={item}/>
      )}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
    </>
  )
}

export default StoryCircleListView

const styles = StyleSheet.create({
  image:{
    height:50,
    width:50
  }
})