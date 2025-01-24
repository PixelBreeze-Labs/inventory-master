// components/AnalysisOrderList.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Svg, Path, G, Rect, ClipPath, Defs } from 'react-native-svg';
import { Border, Color, FontFamily, FontSize } from '@/GlobalStyles';

export const OrderIcon = () => (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
        <Path
            d="M0.5 18.1409V3.42137L3.218 0.140869H15.7618L18.5 3.46412V18.1409H0.5ZM2.0525 3.29987H16.925L15.2116 1.26587H3.767L2.0525 3.29987ZM6.125 12.0614L9.5 10.3739L12.875 12.0614V4.42487H6.125V12.0614Z"
            fill="#BCBCBC"
        />
    </Svg>
);

export const UserIcon = () => (
    <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
        <G clipPath="url(#clip0_3394_5709)">
            <Path
                d="M12.8359 3.47412C14.0294 3.47412 15.174 3.94823 16.0179 4.79214C16.8618 5.63605 17.3359 6.78065 17.3359 7.97412C17.3359 9.1676 16.8618 10.3122 16.0179 11.1561C15.174 12 14.0294 12.4741 12.8359 12.4741C11.6425 12.4741 10.4979 12 9.65396 11.1561C8.81004 10.3122 8.33594 9.1676 8.33594 7.97412C8.33594 6.78065 8.81004 5.63605 9.65396 4.79214C10.4979 3.94823 11.6425 3.47412 12.8359 3.47412ZM12.8359 14.7241C17.8084 14.7241 21.8359 16.7379 21.8359 19.2241V21.4741H3.83594V19.2241C3.83594 16.7379 7.86344 14.7241 12.8359 14.7241Z"
                fill="#BCBCBC"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_3394_5709">
                <Rect
                    width={20}
                    height={20}
                    fill="white"
                    transform="translate(0.5 0.140869)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);

export const TagGrayIcon = () => (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
        <Path
            d="M17.6395 0.314941H10.7556C10.2829 0.314941 9.62095 0.589149 9.28708 0.923017L0.752225 9.45787C0.672263 9.53778 0.608831 9.63267 0.565553 9.7371C0.522275 9.84154 0.5 9.95348 0.5 10.0665C0.5 10.1796 0.522275 10.2915 0.565553 10.3959C0.608831 10.5004 0.672263 10.5953 0.752225 10.6752L8.13977 18.0627C8.21968 18.1427 8.31456 18.2061 8.419 18.2494C8.52343 18.2927 8.63537 18.3149 8.74842 18.3149C8.86147 18.3149 8.9734 18.2927 9.07784 18.2494C9.18227 18.2061 9.27716 18.1427 9.35707 18.0627L17.8919 9.52786C18.2269 9.19284 18.5 8.53199 18.5 8.0593V1.17543C18.4991 0.94749 18.4081 0.729149 18.247 0.567973C18.0858 0.406797 17.8675 0.315848 17.6395 0.314941ZM13.3371 7.19882C13.111 7.19874 12.8872 7.15414 12.6783 7.06755C12.4695 6.98097 12.2798 6.8541 12.1199 6.69418C11.9601 6.53427 11.8334 6.34445 11.747 6.13555C11.6605 5.92665 11.6161 5.70278 11.6161 5.4767C11.6162 5.25062 11.6608 5.02678 11.7474 4.81794C11.834 4.6091 11.9608 4.41936 12.1208 4.25955C12.2807 4.09975 12.4705 3.973 12.6794 3.88656C12.8883 3.80011 13.1122 3.75566 13.3382 3.75573C13.7948 3.75588 14.2326 3.93741 14.5554 4.26037C14.8781 4.58332 15.0594 5.02127 15.0592 5.47785C15.0591 5.93443 14.8775 6.37225 14.5546 6.69499C14.2316 7.01774 13.7937 7.19897 13.3371 7.19882Z"
            fill="#BCBCBC"
        />
    </Svg>
);

export const TimeIcon = () => (
    <Svg width={19} height={19} viewBox="0 0 19 19" fill="none">
        <Path
            d="M9.16406 0.481445C4.20131 0.481445 0.164062 4.51869 0.164062 9.48145C0.164062 14.4442 4.20131 18.4814 9.16406 18.4814C14.1268 18.4814 18.1641 14.4442 18.1641 9.48145C18.1641 4.51869 14.1268 0.481445 9.16406 0.481445ZM14.4141 9.48144C14.4141 9.89566 14.0783 10.2314 13.6641 10.2314H9.61406C8.95132 10.2314 8.41406 9.69419 8.41406 9.03144V4.98144C8.41406 4.56723 8.74985 4.23145 9.16406 4.23145C9.57828 4.23145 9.91406 4.56723 9.91406 4.98144V8.73144H13.6641C14.0783 8.73144 14.4141 9.06723 14.4141 9.48144Z"
            fill="#BCBCBC"
        />
    </Svg>
);
// @ts-ignore
const InfoRow = ({ Icon, text }) => (
    <View style={styles.infoRow}>
        <Icon />
        <Text style={styles.infoText}>{text}</Text>
    </View>
);

const AnalysisOrderList = () => {
    const options = [
        {
            id: 1,
            order_no: "2100",
            user: "Emily Johns",
            price: "12,000 ALL",
            date: "20/10/2024",
            statuses: ["Online", "Delivered"],
        },
        {
            id: 2,
            order_no: "2101",
            user: "Emily Johns",
            price: "12,000 ALL",
            date: "20/10/2024",
            statuses: ["Online", "Cancelled"],
        },
    ];

    return (
        <View style={styles.container}>
            {options.map(({ id, order_no, user, price, date, statuses }) => (
                <View key={id} style={styles.orderCard}>
                    <View style={styles.statusContainer}>
                        {statuses.map((status, index) => (
                            <View key={index} style={[
                                styles.statusBadge,
                                { backgroundColor: status === 'Delivered' ? '#17ce8c33' : '#CB00001A' }
                            ]}>
                                <Text style={[
                                    styles.statusText,
                                    { color: status === 'Delivered' ? '#17CE8C' : '#CB0000' }
                                ]}>
                                    {status}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.infoRowContainer}>
                    <View style={styles.infoContainer}>
                            <InfoRow Icon={OrderIcon} text={`Order #${order_no}`} />
                            <InfoRow Icon={TagGrayIcon} text={price} />
                            <InfoRow Icon={UserIcon} text={user} />
                            <InfoRow Icon={TimeIcon} text={date} />
                    </View>
                        <Image 
                            source={require('@assets/right-arrow.png')}
                            style={{height: 16, width: 16}}
                            resizeMode='contain'
                        />
                    </View>
                   
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 12,
    },
    orderCard: {
        backgroundColor: Color.modeBase00,
        borderRadius: Border.br_lg,
        padding: 16,
        gap: 12,
    },
    statusContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    statusBadge: {
        borderRadius: Border.br_lg,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginBottom: 4,
    },
    statusText: {
        fontFamily: FontFamily.manropeMedium,
        fontSize: FontSize.size_xs,
        fontWeight: '500',
    },
    infoRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',  
    },
    infoContainer: {
        width: '95%',
        gap: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',  
    },
    infoRow: {
        flexDirection: 'row', 
        width: '40%',
        alignItems: 'center',
    },
    infoText: {
        marginLeft: 10,
        fontFamily: FontFamily.manropeBold,
        fontSize: FontSize.textSmFontMedium_size,
        color: Color.black,
        fontWeight: '700',
    },
});

export default AnalysisOrderList;