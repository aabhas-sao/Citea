import React from 'react';
import {SafeAreaView, Image, StyleSheet} from 'react-native';
import {Button, Layout} from '@ui-kitten/components';
import Spacer from 'react-styled-spacer';
import styles from '../../styles';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{...styles.p}}>
      <Layout>
        <Spacer h={36} />
        <Image
          style={styles.heroImage}
          source={{
            uri: 'https://cdn.dribbble.com/users/214882/screenshots/11173711/media/a396471454cec2f1a9b9973441befbdb.png?compress=1&resize=400x300',
          }}
        />
        <Spacer h={36} />

        <Button
          style={{width: '90%', alignSelf: 'center'}}
          onPress={() => {
            console.log('hey');
            navigation.navigate('Complaint');
          }}>
          Submit a request
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

export default HomeScreen;
