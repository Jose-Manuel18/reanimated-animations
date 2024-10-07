import React from "react";
import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, StyleSheet, View } from "react-native";
import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const { width: screenWidth } = Dimensions.get("window");

export const width = screenWidth * 0.9;
export const height = 200;
const url =
  "https://images.unsplash.com/photo-1727461567487-575ec98777fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const array = Array.from({ length: 10 }, () => url);
const startPosition = "center";
export default function Index() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const offsetValue = useSharedValue(0);

  const handleScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    offsetValue.value = offset;
    setActiveIndex(offset / width);
  };
  return (
    <View style={styles.container}>
      {/* <View
      style={{
        position: "absolute",
        left: startPosition === "left" ? 0 : screenWidth / 2 - width / 2,
        width: width,
        height: height,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "red",
        zIndex: 100,
      }}
    >
      <View
        style={{
          position: "absolute",
          left: width / 2 - 1,
          width: 2,
          height: "100%",
          backgroundColor: "green",
        }}
      />
    </View> */}
      <ScrollView
        horizontal
        onScroll={handleScrollOffset}
        contentContainerStyle={{
          backgroundColor: "blue",
          width: width * array.length,
        }}
      >
        {array.map((item, index) => {
          console.log(activeIndex, offsetValue.value);

          const separation = 12;
          const animatedStyle = useAnimatedStyle(() => {
            const inputRange = [index - 1, index, index + 1];
            const outputRange = [index * -separation, 0, index * width];
            const translateX = interpolate(activeIndex, inputRange, outputRange, Extrapolation.CLAMP);
            return {
              position: "absolute",
              left: 100,
              transform: [{ translateX }],
            };
          });
          return (
            <Animated.View key={index} style={[{}, animatedStyle]}>
              <Image key={index} source={{ uri: item }} style={{ width: width, height: height }} />
            </Animated.View>
          );
        })}
      </ScrollView>
      {/* <Carousel
        startPosition={startPosition}
        //TODO: Fix the separation prop, when it's animated it doesn't work as expected because of the scale
        separation={12}
        data={array}
        width={width}
        height={height}
        itemStyle={{ borderRadius: 20 }}
        showsHorizontalScrollIndicator={false}
      /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
