import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/home";
import ToDoList from "./screens/ToDoList";

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Practice To Do" component={Home} />
        <Screen
          name="To Do List"
          component={ToDoList}
          options={({ route }) => {
            return {
              title: route.params.title,
              headerStyle: { backgroundColor: route.params.color },
              headerTintColor: "white",
            };
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
