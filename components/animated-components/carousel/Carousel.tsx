import { AnimationType } from "@/shared/animation.types";
import React from "react";
import {
  Dimensions,
  FlatList,
  FlatListProps,
  ImageStyle,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  View,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { CarouselListItem } from "./CarouselListItem";

interface CarouselProps extends Omit<FlatListProps<any>, "renderItem"> {
  width: number;
  height: number;
  data: string[];
  separation?: number;
  itemStyle?: StyleProp<ImageStyle>;
  startPosition?: "center" | "left";
  animationType?: AnimationType;
}
const { width: screenWidth } = Dimensions.get("window");
export const Carousel: React.FC<CarouselProps> = ({
  itemStyle,
  separation = 10,
  data,
  width,
  height,
  startPosition,
  animationType,
  ...props
}) => {
  const listData = data.map((item, index) => {
    return {
      id: index,
      url: item,
    };
  });

  const offsetValue = useSharedValue(0);

  const handleScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    offsetValue.value = offset;
  };
  return (
    <View
      style={{
        width: "100%",
        height: height,
        position: "relative",
      }}
    >
      <FlatList
        data={listData}
        keyExtractor={(item) => (typeof item.id === "number" ? item.id.toString() : item.id)}
        horizontal
        pagingEnabled
        snapToInterval={width + separation}
        // snapToAlignment="center"
        decelerationRate="fast"
        scrollEventThrottle={16}
        ItemSeparatorComponent={() => <View style={{ width: separation }} />}
        onScroll={handleScrollOffset}
        renderItem={({ item, index }) => {
          return (
            <CarouselListItem
              itemStyle={itemStyle}
              offsetValue={offsetValue}
              id={Number(item.id)}
              index={index}
              url={item.url}
              width={width}
              separation={separation}
              length={Number(listData.at(-1)!.id)}
              height={height}
              animationType={animationType}
            />
          );
        }}
        //* For centering the content
        contentContainerStyle={{
          paddingHorizontal: startPosition === "center" ? screenWidth / 2 - width / 2 : 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        {...props}
      />
    </View>
  );
};
