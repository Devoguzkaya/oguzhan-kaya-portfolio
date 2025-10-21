import axios from 'axios';
import { toast } from 'react-toastify';

export const handleHireRequest = async (name, email) => {
  try {
    const response = await axios.post('https://reqres.in/api/workintech', {
      name: name,
      email: email,
      message: "Let's collaborate on a new project!",
    });

    console.log('✅ Gönderim başarılı:', response.data);
    toast.success('Request sent successfully!');
  } catch (error) {
    console.error('❌ Gönderim hatası:', error);
    toast.error('Something went wrong!');
  }
};