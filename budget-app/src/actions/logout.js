import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteItem } from '../utils/helpers';

export const logoutAction = async () => {
  // delete the user, budgets and expenses
  deleteItem({ key: 'username' })
  deleteItem({ key: 'budgets' })
  deleteItem({ key: 'expenses' })

  toast.success('You have deleted your account!')
  
  // navigate to the home route (return redirect)
  return redirect('/');
};
