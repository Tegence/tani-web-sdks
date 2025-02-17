import axios from '../api/useAxios'
import { TaniAuth } from './TaniAuth';

export const enrollUser = async (auth: TaniAuth,image: string[]): Promise<boolean> => {
  try {
    const response = await axios.post(
      'https://api.usetani.com/api/v0/persons/{person_id}/image',
      { image },
      { headers: auth.getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error('Enrollment failed:', error);
    return error;
  }
};