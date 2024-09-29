import { useEffect } from "react";
import { ColorValue, Dimensions } from "react-native";
import Animated, {
  ReduceMotion,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width: screenWidth } = Dimensions.get("window");

interface ToastProps {
  visible: boolean;
  duration?: number;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  backgroundColor?: ColorValue;
  width?: number;
  height?: number;
  from?: "top" | "bottom";
}

export const Toast: React.FC<ToastProps> = ({
  backgroundColor = "white",
  visible,
  handleClose,
  children,
  from = "top",
  width = screenWidth * 0.8,
  height = 64,
  duration = 1000,
}) => {
  const { bottom, top } = useSafeAreaInsets();
  const translateY = useSharedValue<number>(-10);
  const opacity = useSharedValue<number>(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
      opacity: opacity.value,
    };
  });
  useEffect(() => {
    if (visible) {
      translateY.value = withSequence(
        withSpring(top, {
          duration: 1500,
          dampingRatio: 0.8,
          stiffness: 100,
          overshootClamping: false,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 2,
          reduceMotion: ReduceMotion.System,
        }),
        withSpring(top, {
          duration: duration - 1500,
          dampingRatio: 0.8,
          stiffness: 100,
          overshootClamping: false,
          restDisplacementThreshold: 0.01,
          restSpeedThreshold: 2,
          reduceMotion: ReduceMotion.System,
        }),
        withSpring(
          -100,
          {
            duration: 1500,
            dampingRatio: 0.8,
            stiffness: 100,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 2,
            reduceMotion: ReduceMotion.System,
          },
          () => runOnJS(handleClose)(false)
        )
      );
      opacity.value = withSequence(
        withTiming(1, { duration: 500 }),
        withTiming(1, { duration: duration - 600 }),
        withTiming(0, { duration: 500 })
      );
    }
  }, [visible]);

  return (
    <>
      {visible && (
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              width: width,
              height: height,
              borderRadius: 16,
              left: screenWidth / 2 - width / 2,
              backgroundColor: backgroundColor,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              overflow: "hidden",

              elevation: 5,
            },
            animatedStyle,
          ]}
        >
          {children}
        </Animated.View>
      )}
    </>
  );
};
