// components/CustomerFeedbackForm.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';
import Slider from '@react-native-community/slider';
import CustomCheckbox from './CustomCheckbox';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import useCustomerFeedback from '@/hooks/useCustomerFeedback';

const CustomerFeedbackForm = ({customerId}:any) => {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [foundDesiredProduct, setFoundDesiredProduct] = useState(true);
    const [wouldRecommend, setWouldRecommend] = useState(true);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(true);
    const [communicationChannel, setCommunicationChannel] = useState<string>('email');
    const [purchaseAmount, setPurchaseAmount] = useState('');
    const [productFeedback, setProductFeedback] = useState('');
    const [serviceFeedback, setServiceFeedback] = useState('');
    const [improvementSuggestions, setImprovementSuggestions] = useState('');

    const { submitCustomerFeedback, response, isLoading, error } = useCustomerFeedback();

    // Rating sliders initial values
    const [ratings, setRatings] = useState({
        satisfaction: 5,
        productQuality: 5,
        staffKnowledge: 5,
        staffFriendliness: 5,
        valueForMoney: 5,
        staffCleanliness: 5
    });

    // @ts-ignore
    const RatingSlider = ({ title, value, onValueChange }) => (
        <View style={styles.sliderContainer}>
            <Text style={styles.label}>{title}</Text>
            <View style={styles.sliderLabels}>
                    <Text style={styles.sliderValue}>1</Text>
                    <Text style={styles.sliderValue}>10</Text>
                </View>
            <View style={styles.sliderContent}>
                <Slider
                    style={styles.slider}
                    minimumValue={1}
                    maximumValue={10}
                    step={1}
                    value={value}
                    onValueChange={onValueChange}
                    thumbImage={require("@assets/slider_thumb.png")}
                    minimumTrackTintColor={Color.primary}
                    maximumTrackTintColor="#D0D0D0"
                />
            </View>
        </View>
    );

    const handleSaveFeedback = async () => {
        if(!customerId && customerId !== 0){
            alert("Please select a customer");
            return
        }

        const payload = {
            customer_id: customerId,
            store_id: 1,
            sales_associate_id: 1,
            visit_date: date,
            overall_satisfaction: ratings.satisfaction,
            product_quality: ratings.productQuality,
            staff_knowledge: ratings.staffKnowledge,
            staff_friendliness: ratings.staffFriendliness,
            store_cleanliness: ratings.staffCleanliness,
            value_for_money: ratings.valueForMoney,
            found_desired_product: foundDesiredProduct,
            product_feedback: productFeedback,
            service_feedback: serviceFeedback,
            improvement_suggestions: improvementSuggestions,
            would_recommend: wouldRecommend,
            purchase_made: "",
            purchase_amount: purchaseAmount || 0,
            preferred_communication_channel: communicationChannel,
            subscribe_to_newsletter: subscribeNewsletter,
        };
        await submitCustomerFeedback(payload);
    };

    // @ts-ignore
    const CheckboxOption = ({ label, value, onValueChange }) => (
        <CustomCheckbox
            label={label}
            value={value}
            onValueChange={onValueChange}
        />
    );
    return (
        <View style={styles.container}>
            {/* Visit Date */}
        <View style={styles.selectTypeContainer}>
          <Text style={styles.selectTypeTitle}>Visit Date</Text>
          {/* Date Picker */}
          <TouchableOpacity style={styles.datePickerContainer} onPress={() => setShowDatePicker(true)}>
            <Image
              source={require("../assets/calendarline.png")}
              style={styles.datePickerIcon}
            />
            <Text style={styles.datePickerText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
           <DateTimePickerModal
            isVisible={showDatePicker}
            date={date ? new Date(date) : new Date()}
            maximumDate={new Date()}
            mode="date"
            onConfirm={(date) => {
              setShowDatePicker(false);
              setDate(date);
            }}
            onCancel={() => setShowDatePicker(false)}
         />
          )}
        </View>

            {/* Rating Sliders */}
            <RatingSlider
                title="Overall Satisfaction"
                value={ratings.satisfaction}
                onValueChange={(value: any) => setRatings({ ...ratings, satisfaction: value })}
            />
            <RatingSlider
                title="Product Quality"
                value={ratings.productQuality}
                onValueChange={(value: any) => setRatings({ ...ratings, productQuality: value })}
            />
            <RatingSlider
                title="Staff Knowledge"
                value={ratings.staffKnowledge}
                onValueChange={(value: any) => setRatings({ ...ratings, staffKnowledge: value })}
            />
            <RatingSlider
                title="Staff Friendliness"
                value={ratings.staffFriendliness}
                onValueChange={(value: any) => setRatings({ ...ratings, staffFriendliness: value })}
            />
            <RatingSlider
                title="Staff Cleanliness"
                value={ratings.staffCleanliness}
                onValueChange={(value: any) => setRatings({ ...ratings, staffCleanliness: value })}
            />
            <RatingSlider
                title="Value for Money"
                value={ratings.valueForMoney}
                onValueChange={(value: any) => setRatings({ ...ratings, valueForMoney: value })}
            />

          <View style={styles.sectionContainer}>
            {/* Found Desired Product */}
            <View style={styles.section}>
                <Text style={[styles.label]}>Found Desired Product</Text>
                <View style={styles.optionsRow}>
                    <CheckboxOption
                        label="Yes"
                        value={foundDesiredProduct}
                        onValueChange={() => setFoundDesiredProduct(true)}
                    />
                    <CheckboxOption
                        label="No"
                        value={!foundDesiredProduct}
                        onValueChange={() => setFoundDesiredProduct(false)}
                    />
                </View>
            </View>

            {/* Feedback Text Areas */}
            <View style={styles.section}>
                <Text style={styles.label}>Product Feedback</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    value={productFeedback}
                    onChangeText={(text: any) => setProductFeedback(text)}
                    numberOfLines={5}
                    placeholder="Leave empty if none"
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Service Feedback</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={5}
                    value={serviceFeedback}
                    onChangeText={(text: any) => setServiceFeedback(text)}
                    placeholder="Leave empty if none"
                    placeholderTextColor="#666"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Improvement Suggestions</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    numberOfLines={5}
                    value={improvementSuggestions}
                    onChangeText={(text: any) => setImprovementSuggestions(text)}
                    placeholder="Leave empty if none"
                    placeholderTextColor="#666"
                />
            </View>

            {/* Would Recommend */}
            <View style={styles.section}>
                <Text style={styles.label}>Would Recommend</Text>
                <View style={[styles.optionsRow, {gap: 100}]}>
                    <CheckboxOption
                        label="Yes"
                        value={wouldRecommend}
                        onValueChange={() => setWouldRecommend(true)}
                    />
                    <CheckboxOption
                        label="No"
                        value={!wouldRecommend}
                        onValueChange={() => setWouldRecommend(false)}
                    />
                </View>
            </View>

            {/* Purchase Amount */}
            <View style={styles.section}>
                <Text style={styles.label}>Purchase Amount</Text>
                <TextInput
                    style={styles.input}
                    value={purchaseAmount}
                    onChangeText={(text: any) => setPurchaseAmount(text)}
                    keyboardType="number-pad"
                    placeholder="Enter amount"
                    placeholderTextColor="#666"
                />
            </View>

            {/* Communication Channel */}
                    <View style={styles.section}>
            <Text style={styles.label}>Preferred Communication Channel</Text>
            <View style={styles.optionsRow}>
                <CheckboxOption
                    label="Email"
                    value={communicationChannel === 'email'}
                    onValueChange={() => setCommunicationChannel('email')}
                />
                <CheckboxOption
                    label="SMS"
                    value={communicationChannel === 'sms'}
                    onValueChange={() => setCommunicationChannel('sms')}
                />
                <CheckboxOption
                    label="Both"
                    value={communicationChannel === 'both'}
                    onValueChange={() => setCommunicationChannel('both')}
                />
            </View>
            </View>

            {/* Newsletter Subscription */}
            <View style={styles.section}>
                <Text style={styles.label}>Subscribe To Newsletter</Text>
                <View style={[styles.optionsRow, {gap: 100}]}>
                    <CheckboxOption
                        label="Yes"
                        value={subscribeNewsletter}
                        onValueChange={() => setSubscribeNewsletter(true)}
                    />
                    <CheckboxOption
                        label="No"
                        value={!subscribeNewsletter}
                        onValueChange={() => setSubscribeNewsletter(false)}
                    />
                </View>
            </View>

            {/* Save Button */}
            <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveFeedback()}>
                <Text style={styles.saveButtonText}>Save feedback</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20,
    },
    section: {
        gap: 16,
        // borderWidth: 1,
        // borderColor: "#ccc",
    },
    sectionContainer: {
        gap: 20,  
    },
    label: {
        fontFamily: FontFamily.manropeSemiBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
        color: Color.black,
        // marginBottom: 10,
    },
    selectTypeContainer: {
        gap: 12,
      },
      selectTypeTitle: {
        fontSize: FontSize.textSmFontMedium_size,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.textContentSecondaryDay,
        fontWeight: "600",
      },
      pickerInput: {
        padding: 12,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      datePickerContainer:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
      },
      datePickerIcon: {
        height: 22,
        width: 22,  
      },
      datePicker:{
        // width: 250,
      },
      datePickerText: {
        fontSize: FontSize.textSmFontMedium_size,  
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.textContentSecondaryDay,
        fontWeight: "500",
      },
    dateSection: {
        gap: 8,
        marginBottom: 16,
    },
    dateInput: {
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_lg,
        padding: 12,
        backgroundColor: Color.modeBase00,
    },
    sliderContainer: {
        gap: 8,
    },
    sliderContent: {
        gap: 4,
    },
    slider: {
        height: 40,
    },
    sliderLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    sliderValue: {
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.manropeSemiBold,
        color: Color.textContentSecondaryDay,
        fontWeight: '600',
    },
    optionsRow: {
        flexDirection: 'row',
        gap: 32,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    checkboxLabel: {
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
    },
    textArea: {
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_3xs,
        padding: 12,
        height: 100,
        textAlignVertical: 'top',
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
    },
    input: {
        borderWidth: 1,
        borderColor: Color.colorWhitesmoke_100,
        borderRadius: Border.br_3xs,
        padding: 12,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
    },
    saveButton: {
        backgroundColor: Color.primary,
        borderRadius: Border.br_sm,
        padding: 16,
        alignItems: 'center',
        marginTop: 12,
    },
    saveButtonText: {
        color: Color.modeBase00,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        fontWeight: '600',
    },
});

export default CustomerFeedbackForm;