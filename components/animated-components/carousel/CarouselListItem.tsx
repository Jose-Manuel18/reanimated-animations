import { Dimensions, View } from "react-native";
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
}) => {
  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const outputRange = [0, -50, 0];
    return {
      transform: [{ translateY: interpolate(offsetValue.value, inputRange, outputRange) }],
    };
  });
  const firstItem = index === 0;
  const lastItem = index === length;
  return (
    <Animated.View
      style={[
        {
          width,
          height,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "blue",
          marginLeft: firstItem ? screenWidth / 2 - width / 2 : 0,
          marginRight: lastItem ? screenWidth / 2 - width / 2 : 0,
        },
        // animatedStyles,
      ]}
    >
      <Animated.Image source={{ uri: url }} style={{ width, height }} />
      {/* MIDDLE */}
      <View style={{ position: "absolute", left: width / 2, width: 2, height: "100%", backgroundColor: "yellow" }} />
    </Animated.View>
  );
};
