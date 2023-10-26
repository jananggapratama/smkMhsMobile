import { View, Image, } from 'react-native'
import React from 'react'

const App = () => {
  return (
  <View>
    <View 
    style={{
      height: 52,
      backgroundColor: 'red',
      marginHorizontal: 16,
      borderRadius: 99,
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 16,
    }}>
      <Image source={require('../AwesomeProject/src/assets/images/mhslogo.png')}/>
      <Image source={require('../AwesomeProject/src/assets/icon/Frame.png')}
      style={{width: 24, height: 24, marginRight: 16,}}/>
    </View>
    <View style={{
      marginTop: 20, 
      flexDirection: 'row', 
      borderWidth: 1,
      }}>
      <View
      style={{
        flex: 1,
        padding: 12,
      }}>
         <View
      style={{
        height: 150,
        backgroundColor: 'red',
        borderWidth: 1,
        borderRadius: 12,
      }}></View>
        <View
      style={{
        height: 150,
        backgroundColor: 'red',
        flex: 1,
        borderRadius: 12,
        padding: 12,
      }}></View>

      </View>

    </View>
  </View>
  )
}

export default App