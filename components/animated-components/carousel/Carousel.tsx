import React, { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import { CarouselListItem } from "./CarouselListItem";

type CarouselProps = {
  width: number;
  height: number;
  data: { id: number; url: string }[];
};
export const Carousel: React.FC<CarouselProps> = ({ data, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const offsetValue = useSharedValue(0);

  const handleScrollOffset = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offset = event.nativeEvent.contentOffset.x;
    offsetValue.value = offset;
    const index = offset / width;
    setActiveIndex(index);
  };
  return (
    <View style={{ width, height }}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return <CarouselListItem offsetValue={offsetValue} id={item.id} index={index} url={item.url} width={width} />;
        }}
        horizontal
        pagingEnabled
        snapToInterval={width / 2 + 20}
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
    </View>
  );
};
