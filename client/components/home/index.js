import React from 'react';
import {SafeAreaView} from 'react-native';
import {Button, Layout} from '@ui-kitten/components';
import Spacer from 'react-styled-spacer';
import styles from '../../styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{...styles.p}}>
      <Layout>
        <Spacer h={36} />
        <Button
          onPress={() => {
            console.log('hey');
            navigation.navigate('Complaint');
          }}>
          Submit a request
        </Button>
        <Spacer h={18} />

        <Button>Request Police Help</Button>
        <Spacer h={18} />

        <Button>Report Accident</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
