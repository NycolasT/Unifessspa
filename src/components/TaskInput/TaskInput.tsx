import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../assets/constants/Colors';

interface TaskInputProps {
  onAddTask?: (task: string) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim() && onAddTask) {
      onAddTask(task.trim());
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={Colors.dark.textSecondary}
          value={task}
          onChangeText={setTask}
          onSubmitEditing={handleAddTask}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Ionicons name="add" size={16} color={Colors.dark.text} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 4,
    marginBottom: 32,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: Colors.dark.inputBackground,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.dark.inputBorder,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: Colors.dark.text,
  },
  addButton: {
    backgroundColor: Colors.dark.primary,
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});