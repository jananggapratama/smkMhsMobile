import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
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
        <Image source={require('../assets/images/mhslogo.png')} />
        <Image
          source={require('../assets/icon/Frame.png')}
          style={{width: 24, height: 24, marginRight: 16}}
        />
      </View>

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            padding: 12,
          }}>
          <View>
            <Text
              style={{
                paddingTop: 12,
                fontSize: 14,
                color: 'grey',
                marginHorizontal: 16,
              }}>
              Selamat datang di
            </Text>

            <Text
              style={{
                paddingTop: 8,
                fontSize: 32,
                color: 'black',
                marginHorizontal: 16,
                fontWeight: 'bold',
              }}>
              Kantin Multistudi
            </Text>
          </View>

          <View>
            <Text
              style={{
                paddingTop: 30,
                fontSize: 14,
                color: 'black',
                marginHorizontal: 16,
                fontWeight: 'bold',
              }}>
              menu makanan
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                <Image
                  resizeMode="cover"
                  style={{height: 170, marginTop: 20, width: 170, borderRadius: 10, marginRight: 38,}}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHw0fHxsZW1hayUyQnJpY2V8ZW58MHx8fHwxNjk4Mjk0NDY1fDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
                  }}
                />
              </TouchableOpacity>
              <View>
                <Text
                  style={{fontWeight: 'bold', color: 'black', paddingTop: 5}}>
                  Nasi Lemak
                </Text>
                <Text style={{fontWeight: 'bold', color: 'red', paddingTop: 1}}>
                  Rp.18.000
                </Text>
              </View>
            </View>
            <Image
              resizeMode="cover"
              style={{height: 170, marginTop: 20, width: 170, borderRadius: 10, marginLeft: 25,}}
              source={{
                uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0Mzc0NDd8MHwxfHNlYXJjaHwyfHxidXJnZXJ8ZW58MHx8fHwxNjk4MjgzMzg0fDA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450',
              }}
            />
         
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
