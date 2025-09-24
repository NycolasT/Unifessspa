import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

interface TaskItemProps {
  text: string;
  completed: boolean;
  onToggle: () => void;
  onRemove: () => void;
}

export function TaskItem({ text, completed, onToggle, onRemove }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onToggle} style={styles.iconButton}>
        {completed ? (
          <MaterialIcons name="check-circle" size={22} color="#2C46B1" />
        ) : (
          <MaterialIcons name="radio-button-unchecked" size={22} color="#828282" />
        )}
      </TouchableOpacity>
      <Text style={[styles.text, completed && styles.completed]}>{text}</Text>
      <TouchableOpacity onPress={onRemove} style={styles.iconButton}>
        <Feather name="trash-2" size={20} color="#828282" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  iconButton: {
    padding: 4,
  },
  text: {
    flex: 1,
    color: '#F2F2F2',
    fontSize: 16,
    marginHorizontal: 8,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#828282',
  },
});
