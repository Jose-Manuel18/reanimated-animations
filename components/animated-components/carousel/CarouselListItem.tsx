import Animated, { interpolate, SharedValue, useAnimatedStyle } from "react-native-reanimated";
type CarouselListItemProps = {
  id: number;
  index: number;
  url: string;
  width: number;
  offsetValue: SharedValue<number>;
};
export const CarouselListItem: React.FC<CarouselListItemProps> = ({ id, index, url, width, offsetValue }) => {
  const animatedStyles = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const outputRange = [0, -50, 0];
    return {
      transform: [{ translateY: interpolate(offsetValue.value, inputRange, outputRange) }],
    };
  });
  return (
    <Animated.View
      style={[
        {
          width: width,
          aspectRatio: 1,
          margin: 5,
        },
        animatedStyles,
      ]}
    >
      <Animated.Image source={{ uri: url }} style={{ flex: 1 }} />
    </Animated.View>
  );
};
