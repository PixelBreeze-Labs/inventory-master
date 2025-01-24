// screens/DashboardScreen.tsx
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import moment from 'moment';
import { Color, FontFamily, FontSize } from "@/GlobalStyles";

const dummyActivities = [
  {
    id: '1',
    type: 'stock_change',
    product: 'Nike Air Max',
    action: 'Added',
    quantity: 50,
    timestamp: new Date('2024-01-24T10:30:00'),
    location: 'Warehouse A'
  },
  {
    id: '2',
    type: 'location_change',
    product: 'Adidas Ultra Boost',
    action: 'Moved',
    quantity: 20,
    timestamp: new Date('2024-01-24T09:15:00'),
    location: 'Warehouse B'
  },
  {
    id: '3',
    type: 'stock_change',
    product: 'Puma RS-X',
    action: 'Removed',
    quantity: 5,
    timestamp: new Date('2024-01-24T08:45:00'),
    location: 'Warehouse A'
  }
];

const metrics = [
  {
    id: '1',
    title: 'Total Products',
    value: '2,345',
    change: '+12%',
    positive: true
  },
  {
    id: '2',
    title: 'Low Stock Items',
    value: '48',
    change: '+5%',
    positive: false
  },
  {
    id: '3',
    title: 'Out of Stock',
    value: '15',
    change: '-3%',
    positive: true
  }
];

const quickActions = [
  {
    id: '1',
    title: 'Scan Product',
    icon: '🔍',
    route: '/scanner'
  },
  {
    id: '2',
    title: 'Add Product',
    icon: '➕',
    route: '/products/add'
  },
  {
    id: '3',
    title: 'Stock Take',
    icon: '📋',
    route: '/stock-take'
  }
];

export default function DashboardScreen() {
  const renderActivity = (activity) => (
      <View style={styles.activityItem} key={activity.id}>
        <Text style={styles.activityIcon}>
          {activity.type === 'stock_change' ? '📦' : '📍'}
        </Text>
        <View style={styles.activityContent}>
          <Text style={styles.activityText}>
            {activity.action} {activity.quantity} {activity.product} in {activity.location}
          </Text>
          <Text style={styles.activityTime}>
            {moment(activity.timestamp).fromNow()}
          </Text>
        </View>
      </View>
  );

  return (
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            {quickActions.map(action => (
                <TouchableOpacity
                    key={action.id}
                    style={styles.actionCard}
                    onPress={() => router.push(action.route)}
                >
                  <Text style={styles.actionIcon}>{action.icon}</Text>
                  <Text style={styles.actionTitle}>{action.title}</Text>
                </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Inventory Overview</Text>
          <View style={styles.metricsGrid}>
            {metrics.map(metric => (
                <View key={metric.id} style={styles.metricCard}>
                  <Text style={styles.metricTitle}>{metric.title}</Text>
                  <Text style={styles.metricValue}>{metric.value}</Text>
                  <Text style={[
                    styles.metricChange,
                    metric.positive ? styles.positive : styles.negative
                  ]}>
                    {metric.change}
                  </Text>
                </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <View style={styles.activityList}>
            {dummyActivities.map(renderActivity)}
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200
  },
  section: {
    padding: 16,
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: FontFamily.manropeBold,
    color: Color.textContentSecondaryDay,
    marginBottom: 16
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16
  },
  actionCard: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: Color.modeBase00,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    borderWidth: 1,
    borderColor: Color.modeBase200
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 8
  },
  actionTitle: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    textAlign: 'center',
    color: Color.textContentPrimaryDay
  },
  metricsGrid: {
    flexDirection: 'row',
    gap: 12
  },
  metricCard: {
    flex: 1,
    backgroundColor: Color.modeBase00,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    borderWidth: 1,
    borderColor: Color.modeBase200
  },
  metricTitle: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    color: Color.textContentSecondaryDay,
    marginBottom: 8
  },
  metricValue: {
    fontSize: 24,
    fontFamily: FontFamily.manropeBold,
    color: Color.textContentPrimaryDay,
    marginBottom: 4
  },
  metricChange: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium
  },
  positive: {
    color: '#22C55E'
  },
  negative: {
    color: '#CB0000'
  },
  activityList: {
    backgroundColor: Color.modeBase00,
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    borderWidth: 1,
    borderColor: Color.modeBase200
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Color.modeBase200
  },
  activityIcon: {
    fontSize: 24,
    marginRight: 12
  },
  activityContent: {
    flex: 1
  },
  activityText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    color: Color.textContentPrimaryDay
  },
  activityTime: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    color: Color.textContentSecondaryDay,
    marginTop: 4
  }
});