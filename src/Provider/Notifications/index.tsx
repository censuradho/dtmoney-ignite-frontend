import React, { memo } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

interface IProps {}

const NotificationComponent: React.FC<IProps> = () => {
  return <ToastContainer newestOnTop />;
};

export const Notification = memo(NotificationComponent);
