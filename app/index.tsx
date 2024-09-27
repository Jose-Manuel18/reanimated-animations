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

const SCREEN_WIDTH = Dimensions.get("window").width;
export const photosWidth = SCREEN_WIDTH * 0.6;
export const photosHeight = 400;

export default function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <Carousel data={photos} width={400} height={400} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "red",
  },
});
