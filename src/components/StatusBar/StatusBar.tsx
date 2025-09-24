import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export function StatusBar() {
  return (
    <>
      <ExpoStatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.time}>9:41</Text>
          <View style={styles.rightSide}>
            <View style={styles.signal} />
            <View style={styles.wifi} />
            <View style={styles.battery}>
              <View style={styles.batteryFill} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 46,
    backgroundColor: 'transparent',
    paddingTop: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  time: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  signal: {
    width: 18,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  wifi: {
    width: 16,
    height: 12,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  battery: {
    width: 25,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    padding: 1,
  },
  batteryFill: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 1,
  },
});