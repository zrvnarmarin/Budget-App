import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteItem } from '../utils/helpers';

export const logoutAction = async () => {
  // delete the user
  deleteItem({ key: 'username' });

  toast.success('You have deleted your account!')
  
  // navigate to the home route (return redirect)
  return redirect('/');
};
