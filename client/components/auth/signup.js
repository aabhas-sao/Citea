import React, {useState} from 'react';
import styles from '../../styles/index';
import Spacer from 'react-styled-spacer';
import {Layout, Text, Input, Button} from '@ui-kitten/components';

const Signup = ({isSignin, setIsSignin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');

  return (
    <Layout style={{...styles.p}}>
      <Spacer h={18} />
      <Text style={{...styles.heading, ...styles.textCenter}}>Signup</Text>
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
      <Spacer h={18} />

      <Input
        placeholder="Confirm password"
        value={cPassword}
        onChangeText={nextValue => setCPassword(nextValue)}
      />
      <Spacer h={36} />

      <Button>Signup</Button>

      <Button
        appearance="ghost"
        onPress={() => {
          setIsSignin(!isSignin);
        }}>
        Already have a BYOB account?
      </Button>
    </Layout>
  );
};

export default Signup;
