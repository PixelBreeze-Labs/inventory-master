import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export type OverlayControllerConfig = {
  presentationStyle?: string,
  onDismiss?: () => void,
  animationType?: () => void,
  transparent?: boolean,
  onShow?: () => void,
  onRequestClose?: () => void,
  progress?: number
}

let overlayInstance:any = null;

const OverlayController = () => {
  const [visible, setVisible] = useState(false);
  const [config, setConfig] = useState<OverlayControllerConfig>({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    overlayInstance = {
      isShowing: () => visible,
      show: () => _show(),
      hide: () => _hide(),
      setProgress: (progress: number) => setProgress(progress),
    };
    return () => { overlayInstance = null };
  }, [visible]);

  const _show = () => {
    setVisible(true);
    config.onShow?.();
  };

  const _hide = () => {
    setVisible(false);
    setProgress(0);
    setConfig({});
    config.onDismiss?.();
  };

  return visible ? (
    <View style={OverlayControllerStyle.container}>
      <View style={[ProgressBarStyle.container]}>
        <View style={ProgressBarStyle.progressBar}>
            <ActivityIndicator size="large" color={'white'} />
        </View>
      </View>
    </View>
  ) : null;

  
};

// Static methods to control the overlay
OverlayController.isShowing = () => overlayInstance && overlayInstance.isShowing();
OverlayController.show = () => overlayInstance && overlayInstance.show();
OverlayController.hide = () => overlayInstance && overlayInstance.hide();
OverlayController.setProgress = (progress: number) => overlayInstance && overlayInstance.setProgress(progress);

const ProgressBarStyle = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 100
      },
      progressBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
      },
      image: {
        width: 50,
        height: 50,
      },
      updatingText: {
        marginTop: 12,
        color: "white",
        fontWeight: "600"
      },
})

export const OverlayControllerStyle = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 100
    }
  })

export default OverlayController;
