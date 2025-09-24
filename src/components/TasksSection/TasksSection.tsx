import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { TaskStats } from '../TaskStats/TaskStats';
import { EmptyState } from '../EmptyState/EmptyState';
import { TaskItem } from './TaskItem';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TasksSectionProps {
  createdCount: number;
  completedCount: number;
  isEmpty: boolean;
  tasks: Task[];
  onToggleTask: (id: string) => void;
  onRemoveTask: (id: string) => void;
}

export function TasksSection({
  createdCount,
  completedCount,
  isEmpty,
  tasks,
  onToggleTask,
  onRemoveTask,
}: TasksSectionProps) {
  return (
    <View style={styles.container}>
      <TaskStats createdCount={createdCount} completedCount={completedCount} />
      {isEmpty ? (
        <EmptyState />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              text={item.text}
              completed={item.completed}
              onToggle={() => onToggleTask(item.id)}
              onRemove={() => onRemoveTask(item.id)}
            />
          )}
          contentContainerStyle={{ paddingTop: 16 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});