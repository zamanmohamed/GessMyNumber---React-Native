import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //IOS on pressed style changing
        //මෙහිදී button එක presse  කල විට "pressed" object එක true වෙ.
        //"pressed" object එක true නම් buttonInnerContainer, pressed යන දෙකම button එකට apply වෙ.
        //"pressed" object එක false නම් buttonInnerContainer එක පමණක් apply වෙ.
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        //android on pressed color changing
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
