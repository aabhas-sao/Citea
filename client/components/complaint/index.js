import React from 'react';
import GetLocation from 'react-native-get-location';
import {PermissionsAndroid} from 'react-native';
import {createComplaint} from '../../firebase/db';

import {
  Layout,
  SelectItem,
  Select,
  IndexPath,
  Text,
  Input,
  Button,
  Modal,
  Card,
} from '@ui-kitten/components';
import styles from '../../styles';
import Spacer from 'react-styled-spacer';

const ComplaintScreen = ({navigation}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [value, setValue] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  const submitRequest = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'This App needs access to your location ' +
            'so we can know where you are.',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        })
          .then(location => {
            console.log(location);
            createComplaint(requestTypes[selectedIndex - 1], value, {
              latitude: location.latitude,
              longitude: location.longitude,
            });
          })
          .catch(error => {
            const {code, message} = error;
            console.warn(code, message);
          });
        console.log('You can use locations ');
      } else {
        createComplaint(requestTypes[selectedIndex - 1], value, {
          latitude: 0,
          longitude: 0,
        });
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestTypes = ['Road', 'StreetLight', 'Other'];

  return (
    <Layout style={{...styles.p}}>
      <Spacer h={24} />
      <Text style={{...styles.pl}}>Complaint Type</Text>

      <Select
        selectedIndex={selectedIndex}
        value={requestTypes[selectedIndex - 1]}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem title={requestTypes[0]} />
        <SelectItem title={requestTypes[1]} />
        <SelectItem title={requestTypes[2]} />
      </Select>

      <Spacer h={9} />

      <Input
        placeholder="Description"
        multiline={true}
        numberOfLines={6}
        value={value}
        onChangeText={nextValue => setValue(nextValue)}
      />
      <Spacer h={18} />

      <Button
        onPress={() => {
          submitRequest();
          setVisible(true);
        }}>
        Submit Request
      </Button>
      <Text style={{...styles.textCenter}}>
        Please allow location services to submit.
      </Text>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text>Your Request has been submitted succesfully</Text>
          <Spacer h={12} />

          <Button
            onPress={() => {
              setVisible(false);
              navigation.goBack();
            }}>
            Go to Home
          </Button>
        </Card>
      </Modal>
    </Layout>
  );
};

export default ComplaintScreen;
