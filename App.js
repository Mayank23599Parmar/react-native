import React from 'react';
import Home from "./screens/Home";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* home */}
        <Stack.Screen name="Home" options={{
          headerShown: false
        }}>
          {
            (props) => <Home {...props} title="Welcome to MyTuts" />
          }
        </Stack.Screen>
        {/* contact us */}
        <Stack.Screen name='Contact' options={{
          title: "Contact us",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#06113C",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "bold"
          }
        }}>
          {
            (props) => <ContactUs {...props} />
          }
        </Stack.Screen>
        {/* contact us */}
        <Stack.Screen name='About'
          options={{
            title: "About us",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#06113C",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold"
            }
          }}
        >
          {
            (props) => <About {...props} />
          }
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
