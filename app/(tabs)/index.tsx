import { Carousel } from "@/components/animated-components/carousel/Carousel";
import { Dimensions, StyleSheet, View } from "react-native";
export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const { width: screenWidth } = Dimensions.get("window");

export const width = screenWidth * 0.8;
export const height = 400;
const url =
  "https://images.unsplash.com/photo-1727461567487-575ec98777fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const array = Array.from({ length: 100 }, () => url);
const startPosition = "center";
export default function Index() {
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
      <Carousel
        startPosition={startPosition}
        //TODO: Fix the separation prop, when its animated it doesn't work as expected because of the scale
        separation={12}
        data={array}
        width={width}
        height={height}
        // enableAnimation
        itemStyle={{ borderRadius: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
