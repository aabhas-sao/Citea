import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Button, Layout} from '@ui-kitten/components';
import Spacer from 'react-styled-spacer';
import {HomeIcon} from '../../utils/icons';
import styles from '../../styles';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{...styles.p}}>
      <Layout>
        <Spacer h={36} />
        <Button>Submit a request</Button>
        <Spacer h={18} />

        <Button>Request Police Help</Button>
        <Spacer h={18} />

        <Button>Report Accident</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
