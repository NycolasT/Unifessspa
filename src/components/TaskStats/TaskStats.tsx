import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../assets/constants/Colors';

interface CounterProps {
  count: number;
}

function Counter({ count }: CounterProps) {
  return (
    <View style={styles.counter}>
      <Text style={styles.counterText}>{count}</Text>
    </View>
  );
}

interface TaskStatsProps {
  createdCount?: number;
  completedCount?: number;
}

export function TaskStats({ createdCount = 0, completedCount = 0 }: TaskStatsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statItem}>
        <Text style={styles.createdLabel}>Criadas</Text>
        <Counter count={createdCount} />
      </View>
      
      <View style={styles.statItem}>
        <Text style={styles.completedLabel}>Concluídas</Text>
        <Counter count={completedCount} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createdLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.dark.primaryText,
  },
  completedLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.dark.secondaryText,
  },
  counter: {
    backgroundColor: Colors.dark.surface,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    minWidth: 24,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.dark.textMuted,
  },
});