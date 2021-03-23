import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Item from "./components/Item";
import Input from "./components/Input";

const App = () => {
  const [todos, setTodos] = useState(["Mælk", "Brød", "Pasta", "Frugt"]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (index) => {
    setTodos(
      todos.filter((item, x) => {
        return index !== x;
      })
    );
  };

  return (
    <View style={styles.wrapper}>
      {todos.map((item, index) => {
        return <Item item={item} index={index} removeItem={handleRemove} />;
      })}
      <Input addTodo={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 400,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 22,
    textAlign: "center",
  },
});

export default App;
