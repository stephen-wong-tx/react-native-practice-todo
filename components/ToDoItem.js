import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "./Checkbox";
import Colors from "../constants/Colors";

const EditableText = ({ text, onChangeText, isChecked, newItem }) => {
  const [isEditMode, setEditMode] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => {
        !isChecked && setEditMode(true);
        // add new item hook
      }}
      style={{ flex: 1 }}
    >
      {isEditMode ? (
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={newItem ? "" : text}
          onChangeText={onChangeText}
          placeholder={"New Item"}
          onSubmitEditing={() => {}}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
          onBlur={() => setEditMode(false)}
        />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: isChecked
                ? Colors.lightGray
                : newItem === true
                ? Colors.lightGray
                : Colors.black,
              textDecoration: isChecked ? "line-through" : "none",
            },
          ]}
        >
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ({ text, isChecked, onChecked, onChangeText, newItem }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <Checkbox isChecked={isChecked} onChecked={onChecked} />
        <EditableText
          text={text}
          onChangeText={onChangeText}
          isChecked={isChecked}
          newItem={newItem}
        />
      </View>
      {/* Remove */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    padding: 5,
    fontSize: 16,
  },
  input: {
    color: Colors.black,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 0.5,
    marginHorizontal: 5,
    padding: 3,
    height: 25,
    fontSize: 16,
  },
  text: {
    padding: 3,
    fontSize: 16,
    color: Colors.black,
  },
});
