import firestore from '@react-native-firebase/firestore';

const createComplaint = async (complaintType, description, location) => {
  console.log('heyo');
  await firestore().collection('complaints').add({
    complaintType,
    description,
    location,
  });
  // const users = await firestore().collection('complaints').get();
  // console.log(users);
};

export {createComplaint};
