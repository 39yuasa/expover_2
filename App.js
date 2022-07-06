import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect } from "react";
// https://maps.googleapis.com/maps/api/directions/json?origin=上板橋&destination=新宿&key=AIzaSyCOTvqk7xXppyfmL4tGNrwiq8LmfsxE3_g
// const URL = "https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json";

function App() {
  useEffect(() => {
    start();
  }, []);
  const start = async () => {
    const URL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCOTvqk7xXppyfmL4tGNrwiq8LmfsxE3_g&callback=initMap`;
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
// export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
// import { useEffect, useState } from "react";
// function App() {
//   const makeAPICall = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/cors", {
//         mode: "cors",
//       });
//       const data = await response.json();
//       console.log({ data });
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   useEffect(() => {
//     makeAPICall();
//   }, []);
//   return (
//     <div className="App">
//       <h1>React Cors Guide</h1>
//     </div>
//   );
// }
export default App;
