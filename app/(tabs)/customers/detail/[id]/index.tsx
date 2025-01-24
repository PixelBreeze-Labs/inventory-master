import { Image, Modal, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams, useRouter } from "expo-router";
import { Color, FontFamily, FontSize } from "@/GlobalStyles";
import CustomerItemView from "../../components/CustomerItemView";
import { customers } from "@/constants/collections";
import Icon from '@expo/vector-icons/MaterialIcons';
import { Entypo } from "@expo/vector-icons";
import AddReminderModal from "../../components/AddReminderModal";
import useCustomers, { feedback } from "@/hooks/useCustomers";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ErrorState } from "@/components/ErrorState";
import moment from "moment";

const CustomerDetail = () => {
  const { id } = useLocalSearchParams();
  const [remiderModal, setRemiderModal] = useState(false);
  const {errorDetails, customerDetails:user, isLoadingDetails, fetchCustomerDetails} = useCustomers();

  useEffect(() => {
    fetchCustomerDetails(Number(id));
  }, [id])

  useEffect(() => {
    fetchCustomerDetails(Number(id));
  }, [])

  const onRefresh = () => {
    fetchCustomerDetails(Number(id));
  }


  if (isLoadingDetails && !user) {
    return (
        <LoadingSpinner />
    );
  }

  if (!isLoadingDetails && errorDetails) {
    return (
      <ErrorState message={errorDetails} onRetry={onRefresh} />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}  refreshControl={
                    <RefreshControl
                        refreshing={isLoadingDetails}
                        onRefresh={onRefresh}
                    />
                } >
        <CustomerItemView user={user} isCustomerDetailCard={true} />
        <ContactDetails user={user} />
        <Addresses user={user} />
        <LoyaltyLevel user={user} />
        <Reminders user={user} modal={remiderModal} setModal={setRemiderModal}/>
        <Orders user={user} />
        <CustomerFeedbacks feedbacks={user?.feedback} />
        
        {/* Modals */}
        <AddReminderModal
            user={user}
            isVisible={remiderModal}
            setModal={setRemiderModal}
          />
    </ScrollView>
    </SafeAreaView>
  );
};

const ContactDetails = ({ user }: any) => (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>Contact Details</Text>
    <View style={styles.card}>
      <View style={styles.row}>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{user?.phone}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Birthday</Text>
        <Text style={styles.value}>{user?.birthday}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Preferred communication method</Text>
        <Text style={styles.value}>{user?.preferredCommunicationMethod}</Text>
      </View>
      <View style={[styles.row, {borderBottomWidth: 0}]}>
        <Text style={styles.label}>Registered at</Text>
        <Text style={styles.value}>{user?.registeredAt}</Text>
      </View>
    </View>
    </View>
  );
  
  const Addresses = ({ user }: any) => (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>Addresses</Text>
    <View style={styles.card}>
      {
        user?.addresses?.map((address:any, index:any) => (
          <View key={index} style={[styles.addressRow, {borderBottomWidth: index === user?.addresses?.length - 1 ? 0 : 1}]}>
             <Image
                source={require('../../../../../assets/live-area.png')} 
                resizeMode="contain"
                style={{
                    height: 20,
                    width: 20,
                }} 
            />
            <View style={styles.addressText}>
              <Text style={styles.addressTitle}>{address?.street}</Text>
              <Text style={styles.addressSubText}>{address?.city}, {address?.country}</Text>
            </View>
          </View>
        ))
      }
    </View>
    </View>
  );
  
  const LoyaltyLevel = ({ user }: any) => (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>Loyalty Level</Text>
    <View style={styles.card}>
      <View style={styles.loyaltyLevel}>
        <Text style={styles.loyaltyLevelText}>Your current level</Text>
        <View style={styles.loyaltyBadge}>
            <View style={styles.loyaltyBadgeContainer}>
                <Image
                    source={require('../../../../../assets/bronze-icon.png')}
                    resizeMode="contain"
                    style={styles.loyaltyBadgeImage}
                />
          <Text style={styles.loyaltyBadgeText}>{user?.loyalty_level}</Text>
            </View>
          <Text style={styles.loyaltyBadgeText}>4200 points</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progress, { width: '60%'}]}></View>
        </View>
        <View style={[styles.row, {borderBottomWidth: 0, paddingVertical: 0, paddingBottom: 16}]}>
          <Text style={styles.loyaltyLevelText}>Bronze</Text>
          <Text style={styles.loyaltyLevelText}>Platinum</Text>
        </View>
        <Text style={styles.unlockText}>Earn 120 points to unlock Platinum</Text>
      </View>
    </View>
    </View>
  );
  
  const Reminders = ({ user, modal, setModal }: { user: any, modal: any, setModal: any }) => (
    <View style={styles.cardContainer}>
      <View style={styles.rowReminders}>
      <Text style={styles.title}>Reminders</Text>
      <TouchableOpacity hitSlop={20} onPress={() => setModal(true)}>
        <Image
            source={require('@/assets/plus_icon.png')}
            resizeMode="contain"
            style={{height: 12, width: 12}}
        />
        </TouchableOpacity>
      </View>
      {remindersData.map((reminder, index) => (
        <View style={[styles.card, {marginBottom: index === remindersData.length - 1 ? 0 : 16}]}>
        <View key={index} style={styles.reminderRow}>
          <Image source={reminder.icon} resizeMode="contain" style={{height: 24, width: 24}} />
          <View style={styles.reminderText}>
            <Text style={styles.reminderTitle}>{reminder.title}</Text>
            <Text style={styles.reminderSubText}>{reminder.description}</Text>
          </View>
        </View>
        </View>
      ))}
    </View>
  );
  
  const Orders = ({ user }: { user: any }) => (
    <View style={styles.cardContainer}>
        <Text style={styles.title}>Orders (4)</Text>
    <View style={styles.card}>
      <TouchableOpacity style={styles.orderButton} onPress={()=>{
        router.push(`/customers/detail/${user.id}/order/order-list`)
      }}>
        <Image
            source={require('../../../../../assets/order-icon.png')} 
            resizeMode="contain"
            style={{
                height: 50,
                width: 50,
            }} 
        />
        <View style={styles.orderContent}>
            <Text style={styles.orderText}>View all orders</Text>
            <Text style={styles.orderSubText}>Click here to show all orders</Text>
        </View>
        <Entypo style={{flex: 1, textAlign: 'right'}} name="chevron-small-right" size={26} color="#808089" />
      </TouchableOpacity>
    </View>
    </View>
  );

  const CustomerFeedbacks = ({ feedbacks = [] }: any) => (
    <View style={styles.container}>
      <Text style={styles.title}>Feedbacks</Text>
      {feedbacks?.length > 0 ? (
        feedbacks.map((feedbackItem: any, index: number) => (
          <View key={feedbackItem.id} style={styles.feedbackCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.feedbackDate}>
                {moment(feedbackItem.visit_date).format('D MMMM YYYY')}
              </Text>
              <Text style={styles.feedbackTitle}>
                Satisfaction: <Text style={styles.score}>{feedbackItem.overall_satisfaction}/10</Text>
              </Text>
            </View>
  
            <View style={styles.feedbackDetails}>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Product Quality</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.product_quality}/10</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Staff Friendliness</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.staff_friendliness}/10</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Staff Knowledge</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.staff_knowledge}/10</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Store Cleanliness</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.store_cleanliness}/10</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Value for Money</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.value_for_money}/10</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Purchase Amount</Text>
                <Text style={styles.feedbackValue}>{feedbackItem.purchase_amount || ' ---'}</Text>
              </View>
              <View style={styles.feedbackRow}>
                <Text style={styles.feedbackLabel}>Found Desired Product</Text>
                <Text style={styles.feedbackValue}>
                  {feedbackItem.found_desired_product ? 'Yes' : 'No'}
                </Text>
              </View>
            </View>
  
            <View style={styles.feedbackComments}>
              <Text style={styles.feedbackCommentTitle}>Product Feedback</Text>
              <Text style={styles.feedbackComment}>
                {feedbackItem.product_feedback || ' ---'}
              </Text>
            </View>

            <View style={styles.feedbackComments}>
              <Text style={styles.feedbackCommentTitle}>Service Feedback</Text>
              <Text style={styles.feedbackComment}>
                {feedbackItem.service_feedback || ' ---'}
              </Text>
            </View>

            <View style={styles.feedbackComments}>
              <Text style={styles.feedbackCommentTitle}>Improvements Suggetions</Text>
              <Text style={styles.feedbackComment}>
                {feedbackItem.improvement_suggestions || ' ---'}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noFeedbackText}>No feedback available.</Text>
      )}
    </View>
  );
  
  

  const remindersData = [
    { icon: require('../../../../../assets/birthday.png'), title: 'Birthday', description: 'Birthday incoming in 3 days' },
    { icon: require('../../../../../assets/birthday.png'), title: 'Follow up', description: 'Follow up today at 16:30' },
    { icon: require('../../../../../assets/birthday.png'), title: 'Check feedback', description: "Don't forget to check today's feedback" },
  ];

export default CustomerDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    display: "flex",
    flexDirection: "column",
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 18,
    gap: 20,
  },
  //
  cardContainer: {
    
  },
  rowReminders: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    borderRadius: 12,
    padding: 14,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 1,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontWeight: 'bold',
    fontFamily: FontFamily.manropeBold,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBF0',
  },
  label: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    color: '#27272A',
    width: '68%',
  },
  value: {
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: '700',
    color: '#27272A',
    width: '28%',
    textAlign: 'right',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EBEBF0',
  },
  addressText: {
    marginLeft: 14,
  },
  addressTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    // fontWeight: '500',  
    marginBottom: 6,
  },
  addressSubText: {
    color: '#27272A',
    fontSize: FontSize.textSmFontMedium_size,
    fontWeight: '700',
    fontFamily: FontFamily.manropeBold,
  },
  loyaltyLevel: {
    marginTop: 8,
  },
  loyaltyLevelText: {
    fontSize: FontSize.size_xs,
    color: '#808089',
    fontFamily: FontFamily.manropeMedium,
    marginBottom: 6,
  },
  loyaltyBadge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  loyaltyBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loyaltyBadgeImage: {
    height: 24, 
    width: 24,  
  },
  loyaltyBadgeText: {
    fontSize: FontSize.textBaseFontRegular_size,
    fontFamily: FontFamily.manropeBold,
    fontWeight: '700',
    marginLeft: 8,
  },
  pointsText: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    marginVertical: 8,
  },
  progress: {
    
    height: '100%',
    backgroundColor: '#C47A4A',
    borderRadius: 3,
  },
  unlockText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeBold,
    fontWeight: '700',
    color: '#3D3D3D',
  },
  reminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reminderText: {
    marginLeft: 14,
  },
  reminderTitle: {
    marginBottom: 5,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: '600',
  },
  reminderSubText: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: "#808089",
  },
  orderButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderContent: {
    marginLeft: 14,
    width: '60%',
  },
  orderText: {
    marginBottom: 5,
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: '600',
  },
  orderSubText:{
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeSemiBold,
    color: "#808089",
  },
  // Customer feedback
  feedbackCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    // shadowColor: '#000',
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 1,
    borderWidth: 2,
    borderColor: '#EBEBF0',
  },
  score: {
    fontSize: FontSize.textSmFontMedium_size,
    color: '#000',
    fontWeight: '700',
    fontFamily: FontFamily.manropeBold,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  feedbackDate: {
    fontSize: FontSize.textSmFontMedium_size,
    color: Color.black,
    fontWeight: '700',
    fontFamily: FontFamily.manropeMedium,
  },
  feedbackTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    color: '#333',
  },
  feedbackDetails: {
    marginBottom: 0,
  },
  feedbackRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  feedbackLabel: {
    flex: 1,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: '500',
    color: '#555',
  },
  feedbackValue: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeBold,
    color: '#000',
    fontWeight: '600',
    textAlign: 'right',
  },
  feedbackComments: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingTop: 8,
  },
  feedbackCommentTitle: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeBold,
    color: '#000',
    marginBottom: 6,
  },
  feedbackComment: {
    fontSize: FontSize.textSmFontMedium_size,
    fontFamily: FontFamily.manropeMedium,
    color: '#666',
  },
  noFeedbackText: {
    fontSize: FontSize.textSmFontMedium_size,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
