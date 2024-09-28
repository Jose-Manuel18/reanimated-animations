import { photos } from "@/__mock__/photosMock";
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

export const photosWidth = screenWidth * 0.6;
export const photosHeight = 400;

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <View
        style={{
          position: "absolute",
          left: screenWidth / 2 - photosWidth / 2,
          width: photosWidth,
          height: photosHeight,
          backgroundColor: "transparent",
          borderWidth: 1,
          borderColor: "red",
          zIndex: 100,
        }}
      >
        <View
          style={{
            position: "absolute",
            left: photosWidth / 2 - 1,
            width: 2,
            height: "100%",
            backgroundColor: "green",
          }}
        />
      </View> */}
      <Carousel separation={10} data={photos} width={100} height={400} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
});
