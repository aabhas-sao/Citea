import React, {useState} from 'react';
import {Layout, Text, Input, Button} from '@ui-kitten/components';
import styles from '../../styles/index';
import Spacer from 'react-styled-spacer';
import {signinWithEmail} from '../../firebase/auth';

const Signin = ({setIsSignin, isSignin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Layout style={{...styles.p}}>
      <Spacer h={18} />

      <Text style={{...styles.heading, ...styles.textCenter}}>Signin</Text>
      <Spacer h={36} />
      <Input
        placeholder="Enter email"
        value={email}
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Spacer h={18} />

      <Input
        placeholder="Enter password"
        value={password}
        onChangeText={nextValue => setPassword(nextValue)}
      />

      <Spacer h={36} />

      <Button
        onPress={() => {
          signinWithEmail(email, password);
          console.log('click');
        }}>
        Sign in
      </Button>
      <Button
        appearance="ghost"
        onPress={() => {
          setIsSignin(!isSignin);
        }}>
        Don't have a BYOB account
      </Button>
    </Layout>
  );
};

export default Signin;
