import { Photos, photosWidth } from "@/app/(tabs)";
import React, { useState } from "react";
import { Image, NativeScrollEvent, NativeSyntheticEvent, StyleSheet } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue } from "react-native-reanimated";
interface RenderItemProps {
  item: Photos;
  index: number;
}
export const AnimatedList: React.FC<{ data: Photos[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const offsetValue = useSharedValue(0);
  console.log(offsetValue.value, photosWidth);
  const RenderItem: React.FC<RenderItemProps> = ({ item, index }) => {
    const animatedStyles = useAnimatedStyle(() => {
      const inputRange = [(index - 1) * photosWidth, index * photosWidth, (index + 1) * photosWidth];
      const outputRange = [0, -50, 0];
      return {
        transform: [{ translateY: interpolate(offsetValue.value, inputRange, outputRange) }],
      };
    });
    return (
      <Animated.View
        style={[
          {
            width: photosWidth,
            aspectRatio: 1,
            margin: 5,
          },
          animatedStyles,
        ]}
      >
        <Image source={{ uri: item.url }} style={{ flex: 1 }} />
      </Animated.View>
    );
  };
  const handleScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    offsetValue.value = offset;
    const index = offset / photosWidth;
    setActiveIndex(index);
  };
  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(props) => {
        return <RenderItem {...props} />;
      }}
      horizontal
      pagingEnabled
      snapToInterval={photosWidth / 2 + 20}
      decelerationRate="fast"
      scrollEventThrottle={16}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
      }}
      onScroll={handleScrollOffset}
      style={{
        position: "absolute",
        bottom: 60,
      }}
    />
  );
};

const styles = StyleSheet.create({});
