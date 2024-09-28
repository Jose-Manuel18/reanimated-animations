import React, { useState } from "react";
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { CarouselListItem } from "./CarouselListItem";

type CarouselProps = {
  width: number;
  height: number;
  data: { id: number; url: string }[];
  separation?: number;
};
const { width: screenWidth } = Dimensions.get("window");

export const Carousel: React.FC<CarouselProps> = ({ separation = 10, data, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const offsetValue = useSharedValue(0);

  const handleScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    offsetValue.value = offset;
    const index = offset / width;
    setActiveIndex(index);
  };
  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => (typeof item.id === "number" ? item.id.toString() : item.id)}
      renderItem={({ item, index }) => {
        return (
          <CarouselListItem
            offsetValue={offsetValue}
            id={Number(item.id)}
            index={index}
            url={item.url}
            width={width}
            separation={separation}
            length={Number(data.at(-1)!.id)}
            height={height}
          />
        );
      }}
      horizontal
      pagingEnabled
      snapToInterval={width + separation}
      // snapToAlignment="center"
      decelerationRate="fast"
      scrollEventThrottle={16}
      ItemSeparatorComponent={() => <Animated.View style={{ width: separation }} />}
      onScroll={handleScrollOffset}
    />
  );
};
