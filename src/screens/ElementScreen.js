import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, Icon } from 'react-native';
import { Card, Slider } from '@rneui/themed';

// https://reactnativeelements.com/

const ElementScreen = () => {

    const users = [
        {
          name: 'brynn',
          avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
        },
        {
          name: 'thot leader',
          avatar:
            'https://randomuser.me/api/portraits/men/1.jpg',
        },
        {
          name: 'jsa',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          name: 'talhaconcepts',
          avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
          name: 'andy vitale',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
        },
        {
          name: 'katy friedson',
          avatar:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg',
        },
    ];

    const [value, setValue] = useState(0);

    const interpolate = (start, end) => {
        let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
        return Math.ceil((1 - k) * start + k * end) % 256;
    };

    const color = () => {
        let r = interpolate(255, 0);
        let g = interpolate(0, 255);
        let b = interpolate(0, 0);
        return `rgb(${r},${g},${b})`;
      };

  return (
    <ScrollView>
        <Card>
          <Card.Title>Listado de elementos</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>

        <Card>
            <Card.Title>Sliders</Card.Title>
            <Card.Divider/>
            <View>
                <Slider
                    value={value}
                    onValueChange={setValue}
                    maximumValue={10}
                    minimumValue={0}
                    step={1}
                    allowTouchTrack
                    trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                    thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
                    thumbProps={{
                    children: (
                        <Icon
                        name="heartbeat"
                        type="font-awesome"
                        size={20}
                        reverse
                        containerStyle={{ bottom: 20, right: 20 }}
                        color={color()}
                        />
                    ),
                    }}
                />
            </View>
        </Card>
        
        <Card containerStyle={{ marginTop: 15 }}>
            <Card.Title>FONTS</Card.Title>
            <Card.Divider />
            <Text style={styles.fonts} h1>
                h1 Heading
            </Text>
            <Text style={styles.fonts} h2>
                h2 Heading
            </Text>
            <Text style={styles.fonts} h3>
                h3 Heading
            </Text>
            <Text style={styles.fonts} h4>
                h4 Heading
            </Text>
            <Text style={styles.fonts}>Normal Text</Text>
        </Card>

        <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

    </ScrollView>
  )
}

export default ElementScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
    });