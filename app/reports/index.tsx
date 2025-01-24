import React from "react";
import { StyleSheet, View, Text, ScrollView, SafeAreaView, Dimensions, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from '@expo/vector-icons';
import { BarChart, PieChart, LineChart } from "react-native-chart-kit";
import {
    FontFamily,
    StyleVariable,
    FontSize,
    Color,
    Padding,
    Gap,
    Border,
} from "@/GlobalStyles";
import { Stack, useRouter } from "expo-router";

const { width: screenWidth } = Dimensions.get('window');

const ReportScreen = () => {
    const router = useRouter();

    return (
        <>
        <Stack.Screen
            options={{
                title: 'Reports',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="arrow-back" size={24} color="black" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                ),
                presentation: 'card',
            }}
        />
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.content}>
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Weekly Attendance Overview</Text>
                        <Text style={styles.cardSubtitle}>Hours worked vs. expected, including punctuality metrics</Text>
                        <BarChart
                            data={{
                                labels: ["Week 1", "Week 2", "Week 3"],
                                datasets: [
                                    {
                                        data: [20, 25, 18],
                                    },
                                    {
                                        data: [10, 12, 8],
                                    },
                                    {
                                        data: [5, 3, 7],
                                    },
                                ],
                            }}
                            width={screenWidth - 40}
                            height={220}
                            chartConfig={{
                                backgroundColor: "#ffffff",
                                backgroundGradientFrom: "#ffffff",
                                backgroundGradientTo: "#ffffff",
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                         yAxisLabel={'Tot: '} yAxisSuffix={'h'}/>
                        <View style={styles.legend}>
                            <LegendItem color="rgba(76, 209, 112, 0.8)" label="On-time" />
                            <LegendItem color="rgba(66, 133, 244, 0.8)" label="Early" />
                            <LegendItem color="rgba(221, 18, 52, 0.8)" label="Late" />
                        </View>
                    </View>

                    {/* Performance Summary */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Performance Summary</Text>
                        <Text style={styles.cardSubtitle}>Hours worked vs. expected, including punctuality metrics</Text>
                        <View style={styles.performanceSummary}>
                            <PerformanceItem label="Productivity" value={85} />
                            <PerformanceItem label="Quality of work" value={90} />
                            <PerformanceItem label="Teamwork" value={88} />
                            <PerformanceItem label="Innovation" value={78} />
                            <PerformanceItem label="Leadership" value={82} />
                        </View>
                    </View>
                    {/* Task/Project Report */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Task/Project Report</Text>
                        <Text style={styles.cardSubtitle}>Hours worked vs. expected, including punctuality metrics</Text>
                        <PieChart
                            data={[
                                {
                                    name: "In-Progress",
                                    population: 35,
                                    color: Color.colorsBlue100,
                                    legendFontColor: "#7F7F7F",
                                    legendFontSize: 12
                                },
                                {
                                    name: "Overdue",
                                    population: 10,
                                    color: Color.colorsBlue400,
                                    legendFontColor: "#7F7F7F",
                                    legendFontSize: 12
                                },
                                {
                                    name: "Upcoming",
                                    population: 25,
                                    color: Color.colorsBlue300,
                                    legendFontColor: "#7F7F7F",
                                    legendFontSize: 12
                                },
                                {
                                    name: "Completed",
                                    population: 30,
                                    color: Color.colorsBlue500,
                                    legendFontColor: "#7F7F7F",
                                    legendFontSize: 12
                                }
                            ]}
                            width={screenWidth - 40}
                            height={220}
                            chartConfig={{
                                backgroundColor: "#ffffff",
                                backgroundGradientFrom: "#ffffff",
                                backgroundGradientTo: "#ffffff",
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[10, 10]}
                            absolute
                        />
                    </View>

                    {/* Top 3 Tasks */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Top 3 Tasks</Text>
                        <TaskItem
                            title="Change language"
                            project="BoA App v1"
                            time="6h spent • 10/10/2024"
                            status="Completed"
                            statusColor={Color.colorMediumseagreen_100}
                        />
                        <TaskItem
                            title="Redo base code"
                            project="BoA App v1"
                            time="6h spent • 10/10/2024"
                            status="Pending"
                            statusColor={Color.colorOrange_100}
                        />
                        <TaskItem
                            title="Change language"
                            project="BoA App v1"
                            time="6h spent • 10/10/2024"
                            status="Completed"
                            statusColor={Color.colorMediumseagreen_100}
                        />
                    </View>

                    {/* Top 3 Projects */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Top 3 Projects</Text>
                        <TaskItem
                            title="BoA App v1"
                            project="Software Developer"
                            time="6h spent • 10/10/2024"
                            status="60/100%"
                            statusColor={Color.colorMediumseagreen_100}
                        />
                    </View>

                    {/* Tasks & Progress */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Tasks & Progress</Text>
                        <InfoItem icon="checkmark-circle-outline" label="Total Tracked Time:" value="124h" />
                        <InfoItem icon="time-outline" label="Most Consuming Project:" value="Release" />
                        <InfoItem icon="trending-up-outline" label="Least Consuming Project:" value="Testing" />
                    </View>

                    {/* Productivity Trends */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Productivity Trends</Text>
                        <Text style={styles.cardSubtitle}>Hours worked vs. expected, including punctuality metrics</Text>
                        <View style={styles.trendsContainer}>
                            <TrendItem label="Tasks Completed" value="200" trend="-8%" />
                            <TrendItem label="Hours Worked" value="44" trend="+24%" isPositive />
                            <TrendItem label="Productivity Score" value="80/100" trend="+6%" isPositive />
                        </View>
                        <LineChart
                            data={{
                                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={screenWidth - 40}
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix=""
                            yAxisInterval={1}
                            chartConfig={{
                                backgroundColor: "#ffffff",
                                backgroundGradientFrom: "#ffffff",
                                backgroundGradientTo: "#ffffff",
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
};

// @ts-ignore
const LegendItem = ({ color, label }) => (
    <View style={styles.legendItem}>
        <View style={[styles.legendColor, { backgroundColor: color }]} />
        <Text style={styles.legendLabel}>{label}</Text>
    </View>
);

// @ts-ignore
const TaskItem = ({ title, project, time, status, statusColor }) => (
    <View style={styles.taskItem}>
        <View style={styles.taskInfo}>
            <Text style={styles.taskTitle}>{title}</Text>
            <Text style={styles.taskProject}>Project: {project}</Text>
            <Text style={styles.taskTime}>{time}</Text>
        </View>
        <View style={[styles.taskStatus, { backgroundColor: statusColor }]}>
            <Text style={styles.taskStatusText}>{status}</Text>
        </View>
    </View>
);

// @ts-ignore
const InfoItem = ({ icon, label, value }) => (
    <View style={styles.infoItem}>
        <Ionicons name={icon} size={24} color={Color.modeAlpha900} />
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
    </View>
);

// @ts-ignore
const TrendItem = ({ label, value, trend, isPositive = false }) => (
    <View style={styles.trendItem}>
        <Text style={styles.trendLabel}>{label}</Text>
        <Text style={styles.trendValue}>{value}</Text>
        <Text style={[styles.trendChange, isPositive ? styles.trendPositive : styles.trendNegative]}>
            {isPositive ? '↑' : '↓'} {trend}
        </Text>
    </View>
);
// New PerformanceItem component
// @ts-ignore
const PerformanceItem = ({ label, value }) => (
    <View style={styles.performanceItem}>
        <Text style={styles.performanceLabel}>{label}:</Text>
        <Text style={styles.performanceValue}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorWhitesmoke_200,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    content: {
        padding: 16,
    },
    card: {
        backgroundColor: Color.modeBase00,
        borderRadius: StyleVariable.radiusRadi6,
        padding: 16,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Color.modeBase200,
    },
    cardTitle: {
        fontSize: FontSize.textLgFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.modeAlpha900,
        marginBottom: 8,
    },
    cardSubtitle: {
        fontSize: FontSize.size_mini,
        fontFamily: FontFamily.manropeRegular,
        color: Color.modeAlpha400,
        marginBottom: 16,
    },
    chart: {
        height: 200,
        backgroundColor: Color.modeBase50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    legend: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
        marginBottom: 8,
    },
    legendColor: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 8,
    },
    legendLabel: {
        fontSize: FontSize.size_xs,
        color: Color.modeAlpha700,
    },
    taskItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Color.modeBase200,
    },
    taskInfo: {
        flex: 1,
    },
    taskTitle: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.textListPrimaryDay,
        marginBottom: 4,
    },
    taskProject: {
        fontSize: FontSize.size_xs,
        color: Color.colorGray_300,
        marginBottom: 2,
    },
    taskTime: {
        fontSize: FontSize.size_xs,
        color: Color.colorGray_300,
    },
    taskStatus: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
    },
    taskStatusText: {
        fontSize: FontSize.size_xs,
        color: Color.modeBase00,
        fontWeight: '600',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    infoLabel: {
        flex: 1,
        marginLeft: 12,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.colorDarkslategray,
    },
    infoValue: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.textListPrimaryDay,
    },
    trendsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    trendItem: {
        alignItems: 'center',
    },
    trendLabel: {
        fontSize: FontSize.size_xs,
        color: Color.modeAlpha400,
        marginBottom: 4,
    },
    trendValue: {
        fontSize: FontSize.textLgFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.modeAlpha900,
        marginBottom: 4,
    },
    trendChange: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeSemiBold,
    },
    trendPositive: {
        color: Color.brandSuccess,
    },
    trendNegative: {
        color: Color.red600,
    },
    performanceSummary: {
        backgroundColor: Color.modeBase50,
        borderRadius: StyleVariable.radiusRadi6,
        padding: 16,
    },
    performanceItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    performanceLabel: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.modeAlpha700,
    },
    performanceValue: {
        fontSize: FontSize.textLgFontMedium_size,
        fontFamily: FontFamily.manropeBold,
        color: Color.modeAlpha900,
    },
});

export default ReportScreen;