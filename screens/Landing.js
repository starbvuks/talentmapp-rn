import { React, useRef } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  PanResponder,
  Animated,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;


import Cluster from "../components/MapView";
import Search from "../components/Search";

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
        <Cluster />
      <FontAwesome
        style={styles.userButton}
        name="angle-up"
        size={50}
        color="black"
        onPress={() => navigation.navigate("Stack")}
      />
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    marginVertical: "10%",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    // borderColor: "red",
    // borderWidth: 10
    width: SCREEN_WIDTH + 500,
    height: SCREEN_HEIGHT + "100%",
  },  
  userButton: {
    marginBottom: 25,
  },
});
