import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import {
  FontFamily,
  FontSize,
  Gap,
  Padding,
  Color,
  Border,
} from "@/GlobalStyles";
import ResourceCategoryModal from "./components/ResourceCategoryModal";

const Resources = () => {
    const [categoryModalVisible, setCategoryModalVisible] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.boaSAAppResources}>
          <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/search.png")}
              />
              <Text style={styles.searchText}>Search for resources</Text>
              <TouchableOpacity onPress={() => setCategoryModalVisible(true)}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/filter3line.png")}
              />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filterButton}>
              <Image
                style={styles.iconLayout}
                contentFit="cover"
                source={require("../../assets/filterline.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.contentContainer}>
            <ResourceSection
              icon={require("../../assets/shieldstarline.png")}
              title="Policies & Procedures"
              subtitle="PDF, DOC"
              items={[
                "Company policies",
                "Compliance guidelines",
                "Legal frameworks",
              ]}
            />
            <ResourceSection
              icon={require("../../assets/pagesline.png")}
              title="Forms & Templates"
              subtitle="PDF, DOC"
              items={[
                "Loan application forms",
                "Customer onboarding templates",
                "Employee forms",
              ]}
            />
            <ResourceSection
              icon={require("../../assets/presentationline.png")}
              title="Training Material"
              subtitle="PDF, Video, DOC"
              items={[
                "Tutorials and guides",
                "Role-based training",
                "Micro-learning resources",
              ]}
            />
            <ResourceSection
              icon={require("../../assets/filechartline.png")}
              title="Reports & Analytics"
              subtitle="PDF, XLS"
              items={["Financial reports", "Operational metrics"]}
            />
            <ResourceSection
              icon={require("../../assets/lockstarline.png")}
              title="IT & Security Guidelines"
              subtitle="PDF, DOC"
              items={[
                "Cybersecurity policies",
                "IT infrastructure documentation",
              ]}
            />
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={categoryModalVisible}
        onRequestClose={() => setCategoryModalVisible(false)}
      >
        <ResourceCategoryModal
          setCategoryModalVisible={setCategoryModalVisible}
        />
      </Modal>
    </SafeAreaView>
  );
};

// @ts-ignore
const ResourceSection = ({ icon, title, subtitle, items }) => (
  <View style={styles.sectionCard}>
    <View style={styles.sectionHeader}>
      <Image style={styles.iconLayout} contentFit="cover" source={icon} />
      <View>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.sectionSubtitle}>{subtitle}</Text>
      </View>
    </View>
    {items.map(
      (
        item:
          | string
          | number
          | boolean
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | Iterable<React.ReactNode>
          | React.ReactPortal
          | null
          | undefined,
        index: React.Key | null | undefined
      ) => (
        <TouchableOpacity key={index} style={styles.sectionItem}>
          <Text style={styles.itemText}>{item}</Text>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../../assets/expand-down.png")}
          />
        </TouchableOpacity>
      )
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  boaSAAppResources: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  resources: {
    fontSize: FontSize.textLgFontMedium_size,
    lineHeight: 22,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    color: Color.modeAlpha900,
  },
  headerIcons: {
    flexDirection: "row",
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_3xs,
    padding: 10,
    marginRight: 10,
  },
  searchText: {
    flex: 1,
    marginLeft: 10,
    color: Color.textListPrimaryDay,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
  },
  filterButton: {
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_3xs,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    gap: 20,
  },
  sectionCard: {
    backgroundColor: Color.modeBase00,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_100,
    padding: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    color: Color.textListPrimaryDay,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    marginLeft: 12,
  },
  sectionSubtitle: {
    color: Color.colorGray_300,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    marginLeft: 12,
  },
  sectionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: Color.colorWhitesmoke_100,
  },
  itemText: {
    color: Color.textListPrimaryDay,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
});

export default Resources;
