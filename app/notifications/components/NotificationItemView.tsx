import {
    StyleSheet,
    Text,
    Touchable,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect } from "react";
import { Color } from "@/GlobalStyles";
import DotIcon from "@/assets/notifications/DotIcon";
import ThrreDotHorizontalIcon from "@/assets/notifications/ThreeDotHorizontalIcon";
import Popover from "react-native-popover-view";
import CheckIcon from "@/assets/notifications/Checkicon";
import DeleteIcon from "@/assets/notifications/DeleteIcon";

type Props = {
    data: any;
    index: number;
};
const NotificationItemView = ({ data, index }: Props) => {
    const [showPopup, setShowPopup] = React.useState(false);

    return (
        <View
            style={[styles.container, data.read ? {} : styles.unreadNotificationBg]}
        >
            {!data.read && (
                <View style={styles.dot}>
                    <DotIcon color={Color.primary} />
                </View>
            )}
            <Text style={styles.messageText}>{data.message}</Text>
            <View style={styles.notificationOptions}>
                <Text style={styles.notificationTime}>{data.timestamp}</Text>
                <Popover
                popoverStyle={{ borderRadius: 15}}
                    isVisible={showPopup}
                    onRequestClose={() => setShowPopup(false)}
                    from={
                        <TouchableOpacity hitSlop={15} onPress={() => setShowPopup(true)}>
                            <ThrreDotHorizontalIcon color={"#000000"} />
                        </TouchableOpacity>
                    }>
                    <View style={styles.popOverContainer}>
                        {!data.read && <TouchableOpacity style={styles.buttonsTouchable} onPress={() => setShowPopup(false)}>
                            <CheckIcon color={"#000000"} width={20} height={20} />
                            <Text style={styles.readButtonText}>Read</Text>
                            <Text></Text>
                        </TouchableOpacity>}
                        <TouchableOpacity style={styles.buttonsTouchable} onPress={() => setShowPopup(false)}>
                            <DeleteIcon color={"#000000"} width={20} height={20} />
                            <Text style={styles.readButtonText}>Delete</Text>
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                </Popover>

            </View>

        </View>
    );
};

export default NotificationItemView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 80,
        borderBottomWidth: 1,
        borderBottomColor: "#9E9E9E",
    },
    unreadNotificationBg: {
        backgroundColor: "#ECF2FF",
    },
    dot: {
        width: 20,
    },
    messageText: {
        fontSize: 14,
        color: "#334155",
        fontWeight: "600",
        flex: 1,
        paddingRight: 15,
    },
    notificationTime: {
        fontSize: 14,
        color: "#9E9E9E",
        fontWeight: "400",
        marginBottom: 8,
    },
    notificationOptions: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    // popover
    popOverContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    readButtonText: {
        fontSize: 14,
        color: "#384455",
        fontWeight: "500",
    },
    buttonsTouchable: {
        width: 140,
        paddingHorizontal: 12,
        paddingVertical: 14, 
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: "#EAEAEA",
    },
});
