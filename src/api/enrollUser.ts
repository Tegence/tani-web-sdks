import axios from 'axios';
import { TaniAuth } from './TaniAuth';

export const enrollUser = async (auth: TaniAuth, email: string, images: string[]): Promise<boolean> => {
  try {
    const response = await axios.post(
      'api-end-point',
      { email, images },
      { headers: auth.getHeaders() }
    );
    return response.data.success;
  } catch (error) {
    console.error('Enrollment failed:', error);
    return false;
  }
};