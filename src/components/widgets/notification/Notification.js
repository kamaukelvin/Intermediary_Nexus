import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
 
class Notification extends React.Component {
  createNotification = (type) => {
    return () => {
      // eslint-disable-next-line default-case
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Success message', 'Title here');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };
 
  render() {
    return (
      <div>
        <NotificationContainer/>
      </div>
    );
  }
}
 
export default Notification;