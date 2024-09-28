import { Carousel } from "@/components/animated-components/carousel/Carousel";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export interface Photos {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const { width: screenWidth } = Dimensions.get("window");

export const width = screenWidth * 0.6;
export const height = 400;
const testingImage = [
  "https://images.unsplash.com/photo-1727461567487-575ec98777fc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1721092495872-5cac43ff3f47?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1721092495872-5cac43ff3f47?q=80&w=2456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          position: "absolute",
          left: screenWidth / 2 - width / 2,
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
        separation={16}
        data={testingImage}
        width={width}
        height={height}
        itemStyle={{ borderRadius: 20 }}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={{ color: "white" }}>saludos buenas tardes!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
