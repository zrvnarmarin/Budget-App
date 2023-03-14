import { redirect } from 'react-router-dom';
import { deleteItem } from '../utils/helpers';

export const logoutAction = async () => {
  // delete user
  deleteItem({ key: 'username' });
  
  // navigate to the home route
  return redirect('/');
};
