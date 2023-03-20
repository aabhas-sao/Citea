import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Layout} from '@ui-kitten/components';
import styles from '../../styles';

const ShopScreen = () => {
  return (
    <SafeAreaView>
      <Layout>
        <Text style={{...styles.heading, ...styles.textCenter}}>Shop</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default ShopScreen;
