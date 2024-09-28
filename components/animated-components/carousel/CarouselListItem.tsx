import { Dimensions, ImageStyle, StyleProp, View } from "react-native";
import Animated, { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
type CarouselListItemProps = {
  id: number;
  index: number;
  url: string;
  width: number;
  offsetValue: SharedValue<number>;
  separation: number;
  length: number;
  height: number;
  itemStyle?: StyleProp<ImageStyle>;
};

const { width: screenWidth } = Dimensions.get("window");

export const CarouselListItem: React.FC<CarouselListItemProps> = ({
  separation,
  id,
  index,
  url,
  width,
  offsetValue,
  length,
  height,
  itemStyle,
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const outputRange = [0.6, 1, 0.6];
    return {
      transform: [{ scale: interpolate(offsetValue.value, inputRange, outputRange) }],
    };
  });

  return (
    <Animated.View
      style={[
        {
          width,
          height,
        },
        animatedStyles,
      ]}
    >
      <Animated.Image
        source={{ uri: url }}
        style={[{ width, height, resizeMode: "cover", borderRadius: 100 }, itemStyle]}
      />
      {/* MIDDLE */}
      <View style={{ position: "absolute", left: width / 2, width: 2, height: "100%", backgroundColor: "yellow" }} />
    </Animated.View>
  );
};
