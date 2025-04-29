import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [randombgcolor, setrandombgcolor] = useState('#ffffff');
  const [randomcirclecolor, setrandomcirclecolor] = useState('#000000');
  const [randomtrianglecolor, setrandomtrianglecolor] = useState('#000000');
  const [randomsquarecolor, setrandomsquarecolor] = useState('#000000');
  const [randombtncolor, setrandombtncolor] = useState('#000000');

  const genrateColor = () => {
    const hexColor = '0123456789ABCDEF';
    let bgColor = '#';
    let circleColor = '#';
    let triangleColor = '#';
    let squareColor = '#';
    let btnColor = '#';

    for (let i = 0; i < 6; i++) {
      bgColor += hexColor[Math.floor(Math.random() * 16)];
      circleColor += hexColor[Math.floor(Math.random() * 16)];
      triangleColor += hexColor[Math.floor(Math.random() * 16)];
      squareColor += hexColor[Math.floor(Math.random() * 16)];
      btnColor += hexColor[Math.floor(Math.random() * 16)];
    }
    setrandomsquarecolor(squareColor);
    setrandombgcolor(bgColor);
    setrandomcirclecolor(circleColor);
    setrandomtrianglecolor(triangleColor);
    setrandombtncolor(btnColor);

  };

  return (
    <>
      <StatusBar backgroundColor={randombgcolor} />
      <View style={[styles.container, { backgroundColor: randombgcolor }]}>
        {/* Triangle at top */}
        <View style={[styles.triangle, { borderBottomColor: randomtrianglecolor }]} />

        {/* Button in the center */}
        <View style={[styles.circle, { backgroundColor: randomcirclecolor }]} />
        <View style={[styles.square, { backgroundColor: randomsquarecolor}]} />
        <TouchableOpacity onPress={genrateColor}>
          <View style={[styles.actionbtn,{backgroundColor: randombtncolor}]}>
            <Text style={styles.actionbtntxt}>PRESS ME</Text>
          </View>
        </TouchableOpacity>
        <View style={[styles.triangle, { borderBottomColor: randomtrianglecolor }]} />
        <View style={[styles.circle, { backgroundColor: randomcirclecolor }]} />

        {/* Circle at bottom */}
        {/* square at both side */}
        <View style={[styles.square, { backgroundColor: randomsquarecolor}]} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
  },
  actionbtn: {
    borderRadius: 8,
    backgroundColor: '#6A1B4D',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  actionbtntxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#000',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  square: {
    width: 80,
    height: 80,
    borderRadius: 5,
  }
});
