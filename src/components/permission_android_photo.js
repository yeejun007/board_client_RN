import {PermissionsAndroid} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

export async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      // PermissionsAndroid.PERMISSIONS.CAMERA는 단순히 카메라에 접근하는거임
      // 저장소에 접근하려면 아래와같이 해야함
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      return CameraRoll.getPhotos({
        first: 40,
        assetType: 'Photos',
      });
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
}
