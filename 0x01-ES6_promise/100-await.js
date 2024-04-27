import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = uploadPhoto();
    const userPromise = createUser();
    const promises = [photoPromise, userPromise];

    const [photoResult, userResult] = await Promise.all(promises);

    return {
      photo: photoResult,
      user: userResult,
    };
  } catch (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
