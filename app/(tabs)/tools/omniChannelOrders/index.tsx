// OmnichannelPurchases.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Border, Color, FontFamily, FontSize } from "@/GlobalStyles";
import { Svg, Path, Defs, Rect, ClipPath, G } from "react-native-svg";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AnalysisPieChart from "@/components/AnalysisPieChart";
import AnalysisOrderFilters from "@/components/AnalysisOrderFilters";
import AnalysisOrderList from "@/components/AnalysisOrderList";

const AnalyticsCardIcon = () => (
  <Svg width={19} height={19} viewBox="0 0 19 19">
    <Path
      d="M0.5 18.1602V3.44066L3.218 0.160156H15.7618L18.5 3.48341V18.1602H0.5ZM2.0525 3.31916H16.925L15.2116 1.28516H3.767L2.0525 3.31916ZM6.125 12.0807L9.5 10.3932L12.875 12.0807V4.44416H6.125V12.0807Z"
      fill="#BCBCBC"
    />
  </Svg>
);

const AnalyticsVideoIcon = () => (
  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
    <G clipPath="url(#clip0_3394_5822)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.83594 5.82678V6.82678H2.83594C2.43811 6.82678 2.05658 6.98482 1.77528 7.26612C1.49397 7.54743 1.33594 7.92896 1.33594 8.32678V15.3268C1.33594 15.7246 1.49397 16.1061 1.77528 16.3874C2.05658 16.6687 2.43811 16.8268 2.83594 16.8268H16.5026C16.6996 16.8268 16.8946 16.788 17.0766 16.7126C17.2586 16.6372 17.424 16.5267 17.5633 16.3874C17.7026 16.2482 17.813 16.0828 17.8884 15.9008C17.9638 15.7188 18.0026 15.5238 18.0026 15.3268V14.3268H19.0026C19.8293 14.3268 20.5026 13.6534 20.5026 12.8268V5.82678C20.5026 5.00012 19.8293 4.32678 19.0026 4.32678H5.33594C4.50927 4.32678 3.83594 5.00012 3.83594 5.82678ZM5.5026 5.99345V6.82678H16.5026C16.6996 6.82678 16.8946 6.86558 17.0766 6.94096C17.2586 7.01635 17.424 7.12683 17.5633 7.26612C17.7026 7.40541 17.813 7.57077 17.8884 7.75276C17.9638 7.93475 18.0026 8.1298 18.0026 8.32678V12.6601H18.8359V5.99345H5.5026ZM8.0026 11.8268C8.0026 11.3848 8.1782 10.9608 8.49076 10.6483C8.80332 10.3357 9.22724 10.1601 9.66927 10.1601C10.1113 10.1601 10.5352 10.3357 10.8478 10.6483C11.1603 10.9608 11.3359 11.3848 11.3359 11.8268C11.3359 12.2688 11.1603 12.6927 10.8478 13.0053C10.5352 13.3179 10.1113 13.4934 9.66927 13.4934C9.22724 13.4934 8.80332 13.3179 8.49076 13.0053C8.1782 12.6927 8.0026 12.2688 8.0026 11.8268Z"
        fill="#BCBCBC"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_3394_5822">
        <Rect
          width={20}
          height={20}
          fill="white"
          transform="translate(0.5 0.160156)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

const AnalyticsRateIcon = () => (
  <Svg width={18} height={17} viewBox="0 0 18 17" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 0.0351562C1.70163 0.0351563 1.41548 0.153683 1.2045 0.364661C0.993526 0.575639 0.875 0.861788 0.875 1.16016V15.1602C0.875 15.7818 1.37833 16.2852 2 16.2852H16C16.1477 16.2852 16.294 16.2561 16.4305 16.1995C16.567 16.143 16.691 16.0601 16.7955 15.9557C16.9 15.8512 16.9828 15.7272 17.0394 15.5907C17.0959 15.4542 17.125 15.3079 17.125 15.1602V1.16016C17.125 1.01242 17.0959 0.866129 17.0394 0.729637C16.9828 0.593146 16.9 0.469127 16.7955 0.364661C16.691 0.260195 16.567 0.177328 16.4305 0.120792C16.294 0.0642553 16.1477 0.0351562 16 0.0351562H2ZM12.9583 4.82682C12.9583 4.66106 12.8925 4.50209 12.7753 4.38488C12.6581 4.26767 12.4991 4.20182 12.3333 4.20182C12.1676 4.20182 12.0086 4.26767 11.8914 4.38488C11.7742 4.50209 11.7083 4.66106 11.7083 4.82682V11.4935C11.7083 11.6592 11.7742 11.8182 11.8914 11.9354C12.0086 12.0526 12.1676 12.1185 12.3333 12.1185C12.4991 12.1185 12.6581 12.0526 12.7753 11.9354C12.8925 11.8182 12.9583 11.6592 12.9583 11.4935V4.82682ZM9 6.70182C9.16576 6.70182 9.32473 6.76767 9.44194 6.88488C9.55915 7.00209 9.625 7.16106 9.625 7.32682V11.4935C9.625 11.6592 9.55915 11.8182 9.44194 11.9354C9.32473 12.0526 9.16576 12.1185 9 12.1185C8.83424 12.1185 8.67527 12.0526 8.55806 11.9354C8.44085 11.8182 8.375 11.6592 8.375 11.4935V7.32682C8.375 7.16106 8.44085 7.00209 8.55806 6.88488C8.67527 6.76767 8.83424 6.70182 9 6.70182ZM6.29167 8.99349C6.29167 8.82773 6.22582 8.66876 6.10861 8.55155C5.9914 8.43434 5.83243 8.36849 5.66667 8.36849C5.50091 8.36849 5.34194 8.43434 5.22472 8.55155C5.10751 8.66876 5.04167 8.82773 5.04167 8.99349V11.4935C5.04167 11.6592 5.10751 11.8182 5.22472 11.9354C5.34194 12.0526 5.50091 12.1185 5.66667 12.1185C5.83243 12.1185 5.9914 12.0526 6.10861 11.9354C6.22582 11.8182 6.29167 11.6592 6.29167 11.4935V8.99349Z"
      fill="#BCBCBC"
    />
  </Svg>
);

const analyticsOptions = [
  {
    id: 1,
    icon: <AnalyticsCardIcon />,
    title: "Total Orders",
    value: "127",
  },
  {
    id: 2,
    icon: <AnalyticsVideoIcon />,
    title: "Revenue",
    value: "$45,689",
  },
  {
    id: 3,
    icon: <AnalyticsRateIcon />,
    title: "Avg Order Value",
    value: "$359.76",
  },
];

const data = [
    {
        name: "Offline",
        value: 87,
        color: "#3479E9",
        legendFontColor: "#7F7F7F",
    },
    {
        name: "Online",
        value: 13,
        color: "#003E5F",
        legendFontColor: "#7F7F7F",
    }
];

const OmnichannelOrders = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => (
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.headerLeftIcon}
      >
        <Ionicons name="arrow-back" size={24} color={Color.black} />
      </TouchableOpacity>
    ),
    headerTitle: "Omnichannel Purchases",
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Analytics Summary */}
        <View style={styles.whiteCard}>
          <Text style={styles.sectionTitle}>Analytics Summary</Text>
          <View style={styles.analyticsList}>
            {analyticsOptions.map((item) => (
              <View key={item.id} style={styles.analyticsCard}>
                {item.icon}
                <Text style={styles.analyticsText}>
                  {`${item.title}: ${item.value}`}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Sales Channel Distribution */}
        <View style={styles.whiteCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.sectionTitle}>Sales Channel Distribution</Text>
            <Text style={styles.description}>
              Hours worked vs. expected, including punctuality metrics
            </Text>
          </View>
          <AnalysisPieChart data={data} />
          <View style={styles.legendView}>
          {
            data.map((item) => (
                <View style={styles.legendItem}>
                  <View style={[styles.legendColor, { backgroundColor: item.color }]} />
                  <Text style={styles.legendText}>{item.name}</Text>
                </View>
            ))
          }
           </View>
        </View>

        <View style={styles.filterSection}>
          <AnalysisOrderFilters />
        </View>

        <View style={styles.orderList}>
          <AnalysisOrderList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  content: {
    padding: 16,
    gap: 16,
  },
  whiteCard: {
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_lg,
    padding: 16,
    paddingHorizontal: 18,
    gap: 16,
    borderWidth: 1,
    borderColor: Color.modeBase200,
  },
  sectionTitle: {
    fontFamily: FontFamily.manropeBold,
    fontSize: FontSize.textLgFontMedium_size,
    fontWeight: "bold",
    color: Color.modeAlpha900,
  },
  analyticsList: {
    gap: 12,
  },
  analyticsCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: 16,
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_sm,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
  },
  analyticsText: {
    fontFamily: FontFamily.manropeSemiBold,
    fontSize: FontSize.textSmFontMedium_size,
    color: Color.textListPrimaryDay,
    fontWeight: "600",
  },
  cardHeader: {
    gap: 4,
  },
  description: {
    fontFamily: FontFamily.manropeRegular,
    fontSize: FontSize.textSmFontMedium_size,
    color: Color.modeAlpha400,
    lineHeight: 20,
    width: "80%",
  },
  filterSection: {
    minHeight: 0,
    gap: 16,
  },
  orderList: {
    gap: 16,
  },
  headerLeftIcon: {
    marginLeft: 10,
  },
  legendView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 26,
    paddingVertical: 16,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  legendColor: {
    width: 16,
    height: 16,
    borderRadius: 2,
    backgroundColor: Color.primary,
  },
  legendText: {
    fontFamily: FontFamily.manropeSemiBold,
    fontSize: FontSize.textSmFontMedium_size,
    color: Color.textListPrimaryDay,
    fontWeight: "600",
  },
});

export default OmnichannelOrders;
