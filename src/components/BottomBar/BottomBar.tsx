import React from 'react';
import { View, StyleSheet } from 'react-native';

export function BottomBar() {
  return (
    <View style={styles.container}>
      <View style={styles.invisible} />
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  invisible: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
  line: {
    position: 'absolute',
    left: '32%',
    right: '32%',
    top: '61.77%',
    bottom: '23.53%',
    backgroundColor: '#bcbcbc',
    opacity: 0.24,
    borderRadius: 100,
  },
});