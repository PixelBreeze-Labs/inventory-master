import { Text, View } from "@/components/Themed";
import { Border, Color, FontFamily, FontSize } from "@/GlobalStyles";
import { StyleSheet, TouchableOpacity } from "react-native";
import * as Progress from 'react-native-progress';
import { router } from "expo-router";
interface ProjectCardProps {
    title: string;
    date: string;
    status: "In Progress" | "Completed";
    progress: number; // e.g., 75 for 75%
}
const ProjectCard = ({ title, date, status, progress }: ProjectCardProps) => (
    <View style={styles.projectCard}>
        <TouchableOpacity onPress={() => router.push("/projectDetail")} >
            <View style={styles.projectHeader}>
                <View>
                    <Text style={styles.projectTitle}>{title}</Text>
                    <Text style={styles.projectDate}>{date}</Text>
                </View>
                <View style={[styles.statusBadge, status === "Completed" ? styles.completedBadge : styles.inProgressBadge]}>
                    <Text style={[styles.statusText, { color: status === "Completed" ? Color.colorMediumseagreen_100 : Color.colorOrange_100 }]}>{status}</Text>
                </View>
            </View>
            <View style={styles.projectDetails}>
                <View>
                    <Text style={styles.detailText}>
                        <Text style={styles.boldText}>Project Manager: </Text>
                        Emily Johns
                    </Text>
                    <Text style={styles.detailText}>
                        <Text style={styles.boldText}>Time entries: </Text>
                        25 hours
                    </Text>
                </View>
                <Progress.Circle
                    size={50}
                    progress={progress / 100}
                    showsText={true}
                    formatText={() => `${progress}%`}
                    // @ts-ignore
                    textStyle={[styles.progressText, { color: status === "Completed" ? Color.colorMediumseagreen_100 : Color.colorMidnightblue }]}
                    borderWidth={0}
                    color={status === "Completed" ? Color.colorMediumseagreen_100 : Color.colorMidnightblue}
                    unfilledColor={Color.modeBase200}
                />
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    projectCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_5xs,
        borderWidth: 1,
        overflow: 'hidden',
        borderColor: Color.colorWhitesmoke_100,
        shadowOpacity: 0.1,
    },
    projectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: Color.colorWhitesmoke_100,
    },
    projectTitle: {
        fontSize: FontSize.textBaseFontRegular_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
        fontWeight: '700',
        paddingBottom: 4,
    },
    projectDate: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeMedium,
        color: Color.colorGray_300,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: Border.br_7xs,
    },
    inProgressBadge: {
        backgroundColor: Color.colorOrange_200,
    },
    completedBadge: {
        backgroundColor: Color.colorMediumseagreen_200,
    },
    statusText: {
        fontSize: FontSize.size_3xs,
        fontFamily: FontFamily.manropeBold,
        fontWeight: '700',
        padding: 1,
    },
    projectDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 8,
    },
    detailText: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeMedium,
        color: Color.colorGray_300,
        paddingVertical: 2,
    },
    boldText: {
        fontWeight: '700',
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
    },
    progressText: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.textSmFontMedium,
    },
});

export default ProjectCard;
