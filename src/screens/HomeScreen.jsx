/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList,  Dimensions, Platform } from 'react-native'
import {themeColors} from '../theme'
import {MapPinIcon} from 'react-native-heroicons/solid'
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import { categories, coffeeItems } from '../constants'

import Carousel from "react-native-snap-carousel"
import CoffeCard from '../components/CoffeCard'

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

const HomeScreen = () => {
  StatusBar.setHidden(true);

  const [activeCategory, setCategory] = useState(1)
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <StatusBar />
      
        <Image 
              source={require('../../assets/images/beansBackground1.png')}
              className="w-full absolute -top-5 opacity-10"
              style={{ height: 220}}
        />
       

       <SafeAreaView className="flex-1 py-4">
        <View className="px-4 flex-row justify-between items-center">
        <TouchableOpacity>
          <Image 
            source={require('../../assets/images/avatar.png')}
            className="h-9 w-9 rounded-full"
          />
          </TouchableOpacity>
          
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>

          <TouchableOpacity>
          <BellIcon 
            size="27"
            color="black"
          />
          </TouchableOpacity>

        </View>

       {/* search bar */}

       <View className="mx-5 mt-10">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search' className="p-3 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity className="rounded-full p-3" style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
       </View>

       {/* Categories */}

       <View className="px-5 mt-6">
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item => item.id}
            className="overflow-visible"
            renderItem={({item}) => {
              let isActive = item.id == activeCategory;
              let activeTextClass = isActive ? 'text-white': 'text-gray-700'
              return (
                <TouchableOpacity 
                  onPress={() => setCategory(item.id)}
                  style={{backgroundColor: isActive ? themeColors.bgLight :'rgba(0, 0, 0, 0.07)'}} 
                  className="p-4 px-5 rounded-full mr-2 shadow"
                >
                  <Text className={"font-semibold " + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
          />
       </View>

       {/* Coffee Cards */}

       <View className="mt-16 px-2">
            {/* Now we are going to use a Carousel here */}
            <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={coffeeItems}
            renderItem={({item})=> <CoffeCard item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width*0.63}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
       </View>

       </SafeAreaView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})