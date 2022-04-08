import React, { useState, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ToDoItem from "../components/ToDoItem";

const renderAddListIcon = (addItemToLists) => {
  return (
    <TouchableOpacity
      onPress={() => addItemToLists({ text: "New Item", isChecked: false, newItem: true })}
    >
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

export default ({ navigation }) => {
  const [toDoItems, setToDoItems] = useState([
    { text: "hello", isChecked: false, newItem: false },
  ]);

  const addItemToLists = (item) => {
    toDoItems.push(item);
    setToDoItems([...toDoItems]);
  };

  const removeItemFromLists = (index) => {
    toDoItems.splice(index, 1);
    setToDoItems([...toDoItems]);
  };

  const updateItem = (index, item) => {
    toDoItems[index] = item;
    setToDoItems([...toDoItems]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => renderAddListIcon(addItemToLists),
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={toDoItems}
        renderItem={({ item: { text, isChecked, newItem }, index }) => {
          return (
            <ToDoItem
              text={text}
              style={ newItem ? styles.new : ""}
              isChecked={isChecked}
              newItem={newItem}
              onChecked={() => {
                const toDoItem = toDoItems[index];
                toDoItem.isChecked = !isChecked;                
                updateItem(index, toDoItem);
              }}
              onChangeText={(newText) => {
                const toDoItem = toDoItems[index];
                toDoItem.text = newText;
                if (newItem === true) toDoItem.newItem = false;
                updateItem(index, toDoItem);
              }}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemTitle: { fontSize: 24, padding: 5, color: "white" },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
  },
  icon: {
    padding: 5,
    fontSize: 24,
    color: "white",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  newItem: {
    color: Colors.lightGray
  }
});
