import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';


export default function App() {
  const [page, setPage ] = useState("registration");

  const changePage = data => {
    setPage(data);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto/Roboto-Black.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    (page == "registration" && (
      <RegistrationScreen changePage={() => changePage("login")} />
    )) ||
    (page == "login" && (
      <LoginScreen setPage changePage={() => changePage("registration")} />
    ))
  );
}