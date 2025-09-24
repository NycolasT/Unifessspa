import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../assets/constants/Colors';

export function EmptyState() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="clipboard-outline" size={56} color={Colors.dark.textSecondary} />
        </View>
        
        <View style={styles.textContainer}>
          <Text style={styles.primaryText}>
            Você ainda não tem tarefas cadastradas
          </Text>
          <Text style={styles.secondaryText}>
            Crie tarefas e organize seus itens a fazer
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderTopColor: Colors.dark.surface,
    paddingTop: 48,
    paddingBottom: 48,
    paddingHorizontal: 20,
  },
  content: {
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
    gap: 4,
  },
  primaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.dark.textSecondary,
    textAlign: 'center',
  },
  secondaryText: {
    fontSize: 14,
    color: Colors.dark.textSecondary,
    textAlign: 'center',
  },
});