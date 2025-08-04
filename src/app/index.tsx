import { useEffect, useRef } from "react";
import { Animated, Text, View } from "react-native";

export default function Index() {
  const larAnimada = useRef(new Animated.Value(100)).current;
  const altAnimada = useRef(new Animated.Value(100)).current;
  const opacidadAnimada = useRef(new Animated.Value(0)).current;

  const animar = () => {
    Animated.sequence([
      Animated.timing(opacidadAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
    ]).start();
  };

  useEffect(() => {
    animar();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{
          width: larAnimada,
          height: altAnimada,
          backgroundColor: "red",
          opacity: opacidadAnimada,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white" }}>Hello World!!</Text>
      </Animated.View>
    </View>
  );
}
