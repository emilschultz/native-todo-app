import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

const Input = (props) => {
  const [value, setValue] = useState("");
  const { addTodo } = props;

  const handleAddTodo = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Text"
        onChangeText={(txt) => {
          setValue(txt);
        }}
        value={value}
      ></TextInput>
      <TouchableOpacity onPress={handleAddTodo}>
        <Text>Add todo</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Input;
