import React from 'react';
import { View } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }}/>
    </View>
  )
}

export default CameraScreen;