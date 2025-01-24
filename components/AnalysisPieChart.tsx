import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Color } from '@/GlobalStyles';

type Props = {
    data : any
}
const AnalysisPieChart = ({data}:Props) => {
    const chartConfig = {
        backgroundGradientFrom: "#FFF",
        backgroundGradientTo: "#FFF",
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    };

    return (
        <View style={styles.container}>
            <PieChart
                data={data}
                width={Dimensions.get("window").width - 64} // Account for padding
                height={220}
                chartConfig={chartConfig}
                accessor="value"
                backgroundColor="transparent"
                paddingLeft="0"
                absolute
                center={[90, 0]}
                hasLegend={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        borderWidth: 1,
        backgroundColor: Color.modeBase50,
        borderColor: Color.colorWhitesmoke_100,
    },
});

export default AnalysisPieChart;