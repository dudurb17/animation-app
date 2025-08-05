import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function Index() {
  const buttonRef = useRef<typeof TouchableOpacity>(null);

  const handlePress = () => {
    buttonRef.current?.shake(1000);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animatable.Text
        animation="shake"
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Hello World!!
      </Animatable.Text>
      <ButtonAnimated
        ref={buttonRef}
        onPress={handlePress}
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
          width: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
          Animar
        </Text>
      </ButtonAnimated>
    </View>
  );
}
