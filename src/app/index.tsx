import { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export default function Index() {
  const larAnimada = useRef(new Animated.Value(100)).current;
  const altAnimada = useRef(new Animated.Value(100)).current;

  let porcentaje = larAnimada.interpolate({
    inputRange: [0, 300],
    outputRange: ["0%", "100%"],
  });

  let porcentajeAlt = altAnimada.interpolate({
    inputRange: [0, 300],
    outputRange: ["0%", "100%"],
  });

  const animar = () => {
    Animated.sequence([
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
          width: porcentaje,
          height: porcentajeAlt,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      />
    </View>
  );
}
