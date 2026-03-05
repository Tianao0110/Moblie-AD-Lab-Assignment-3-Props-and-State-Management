import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

export default function Index() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'walk dog'
  ]);

  return(
    <View style={styles.container}>
      <ToDoForm/>
      <ToDoList tasks = {tasks}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  }
});