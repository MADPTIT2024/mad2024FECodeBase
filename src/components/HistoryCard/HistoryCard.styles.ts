import Colors from "@/constants/Colors";
import FontSize from "@/constants/FontSize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    touchableContainer: {
        marginVertical: 10,
        backgroundColor: Colors.primary,
        borderRadius: 10,
    },
    image: {
        width: 100,
        height: 100,
        margin: 10,
    },
    headerText: {
        fontSize: FontSize.md,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})