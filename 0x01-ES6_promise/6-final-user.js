import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  const promises = [userPromise, photoPromise];

  return Promise.allSettled(promises).then((results) => {
    const arr = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        arr.push({ status: result.status, value: result.value });
      } else {
        arr.push({ status: result.status, value: result.reason });
      }
    });
    return arr;
  });
}
