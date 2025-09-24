import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "./src/components/StatusBar/StatusBar";
import { AppLogo } from "./src/components/AppLogo/AppLogo";
import { TaskInput } from "./src/components/TaskInput/TaskInput";
import { TasksSection } from "./src/components/TasksSection/TasksSection";
import { BottomBar } from "./src/components/BottomBar/BottomBar";

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskText: string) => {
    if (!taskText.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      text: taskText,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const createdCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;
  const isEmpty = tasks.length === 0;

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Header */}
      <View style={styles.header} />

      {/* Status Bar */}
      <View style={styles.statusBar}>
        <StatusBar />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* App Logo */}
        <AppLogo />

        {/* Task Input */}
        <TaskInput onAddTask={handleAddTask} />

        {/* Tasks Section */}
        <TasksSection
          createdCount={createdCount}
          completedCount={completedCount}
          isEmpty={isEmpty}
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onRemoveTask={handleRemoveTask}
        />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomBar}>
        <BottomBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1a1a1a" },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 173,
    backgroundColor: "#0d0d0d",
  },
  statusBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 46,
    zIndex: 1,
  },
  content: { padding: 20, paddingTop: 50 },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
  },
});