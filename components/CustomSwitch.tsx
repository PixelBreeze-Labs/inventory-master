import { Color } from '@/GlobalStyles';
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Animated, StyleSheet } from 'react-native';

interface SwitchProps {
    defaultChecked: boolean;
    onValueChange?: (value: boolean) => void;
    disabled?: boolean;
}

const CustomSwitch: React.FC<SwitchProps> = ({ defaultChecked, onValueChange, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);
    const [animation] = useState(new Animated.Value(defaultChecked ? 1 : 0));

    useEffect(() => {
        setIsChecked(defaultChecked);
        Animated.timing(animation, {
            toValue: defaultChecked ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [defaultChecked]);

    const toggleSwitch = () => {
        if (disabled) return;

        const newValue = !isChecked;
        setIsChecked(newValue);
        Animated.timing(animation, {
            toValue: newValue ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start();
        onValueChange && onValueChange(newValue);
    };

    const backgroundColorInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [disabled ? '#e0e0e0' : '#ccc', Color.primary]
    });

    const translateXInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 26]
    });

    return (
        <TouchableOpacity
            activeOpacity={disabled ? 1 : 0.8}
            onPress={toggleSwitch}
            style={[styles.switchContainer, disabled && styles.disabledContainer]}
        >
            <Animated.View
                style={[
                    styles.switchTrack,
                    { backgroundColor: backgroundColorInterpolation }
                ]}
            />
            <Animated.View
                style={[
                    styles.switchThumb,
                    { transform: [{ translateX: translateXInterpolation }] },
                    disabled && styles.disabledThumb
                ]}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    switchContainer: {
        width: 48,
        height: 25,
        borderRadius: 12.5,
        justifyContent: 'center',
    },
    disabledContainer: {
        opacity: 0.7,
    },
    switchTrack: {
        width: '100%',
        height: '100%',
        borderRadius: 12.5,
        position: 'absolute',
    },
    switchThumb: {
        width: 20,
        height: 20,
        borderRadius: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2.5,
        elevation: 4,
    },
    disabledThumb: {
        backgroundColor: '#f0f0f0',
    },
});

export default CustomSwitch;