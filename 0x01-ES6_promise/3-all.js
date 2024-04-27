import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let string = '';

  const photoPromise = uploadPhoto();
  photoPromise
    .then((res) => {
      string += ` ${res.body}`;
      return createUser();
    })
    .then((res) => {
      string += ` ${res.firstName} ${res.lastName}`;
      console.log(string);
    })
    .catch(() => {
      throw new Error('Signup system offline');
    });
}
