import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

export function AppLogo() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.rocket}>
          <Text style={styles.rocketIcon}>🚀</Text>
        </View>
        <Text style={styles.toText}>to</Text>
        <Text style={styles.doText}>do</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rocket: {
    width: 20,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rocketIcon: {
    fontSize: 20,
  },
  toText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.dark.primaryText,
  },
  doText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.dark.secondaryText,
  },
});