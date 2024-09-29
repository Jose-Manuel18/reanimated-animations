import { Dimensions, ImageStyle, StyleProp } from "react-native";
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
  enableAnimation?: boolean;
};

const { width: screenWidth } = Dimensions.get("window");

export const CarouselListItem: React.FC<CarouselListItemProps> = ({
  index,
  url,
  width,
  offsetValue,
  height,
  itemStyle,
  separation,
  enableAnimation,
}) => {
  //TODO FIX THE ANIMATION, FOR SOME REASON THE MORE YOU SCROLL THE MORE IT GETS OUT OF SYNC.

  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (width + separation),
      index * (width + separation),
      (index + 1) * (width + separation),
    ];
    const outputRange = [0.9, 1, 0.9];
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
        enableAnimation && animatedStyles,
      ]}
    >
      <Animated.Image
        source={{ uri: url }}
        style={[{ width, height, resizeMode: "cover", borderRadius: 100 }, itemStyle]}
      />
      {/* MIDDLE */}
      {/* <View style={{ position: "absolute", left: width / 2, width: 2, height: "100%", backgroundColor: "yellow" }} /> */}
    </Animated.View>
  );
};
