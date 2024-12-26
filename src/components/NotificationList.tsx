import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../logic/store';
import { removeNotification } from '../logic/notificationSlice';

const NotificationList: React.FC = () => {
  const notifications = useSelector((state: RootState) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-top">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className="alert shadow-lg bg-green-500 text-white flex justify-between items-center"
        >
          <span className="flex-grow">{notification.message}</span>
          <button
            className="text-white font-bold"
            onClick={() => dispatch(removeNotification(notification.id))}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationList;
