import auth from '@react-native-firebase/auth';

const createAccountWithEmail = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

const signinWithEmail = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      if (error.code === 'auth/invalid-password') {
        console.log(
          'The provided value for the password user property is invalid. It must be a string with at least six characters.',
        );
      }

      console.error(error);
    });
};

const signOut = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
};

export {createAccountWithEmail, signinWithEmail, signOut};
