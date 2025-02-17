import axios from '../api/useAxios'
import { TaniAuth } from './TaniAuth';

export const enrollUser = async (auth: TaniAuth, person_name: string, client_id: string, image:File): Promise<boolean> => {
  try {
    const response = await axios.post(
      '/persons/create-with-image',
      { person_name, client_id, image },
      { headers: auth.getHeaders() }
    );
    return response.data;
  } catch (error) {
    console.error('Enrollment failed:', error);
    return false;
  }
};