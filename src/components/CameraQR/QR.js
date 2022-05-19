import { StyleSheet, Text, View ,TouchableOpacity,Alert} from 'react-native'
import React from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { customColors } from '../../assets/Colors';

const QR = (props) => {
    const [qrCode,setQrCode] = React.useState()
    const [scanState,setScanState] = React.useState(true)
    const onSuccess = e => {
        setQrCode(e.data)
        props.setQrCode(e.data)
    };
    
    return (
        <QRCodeScanner
            reactivate={true}
            reactivateTimeout={1000}
            fadeIn={false}
            cameraStyle={{height:280,width:280,borderWidth:10,borderRadius:10,borderColor:customColors.black}}
            onRead={onSuccess}
            flashMode={props.isFlashOn ? RNCamera.Constants.FlashMode.off: RNCamera.Constants.FlashMode.torch}
        />
    );
}
export default QR
const styles = StyleSheet.create({})
