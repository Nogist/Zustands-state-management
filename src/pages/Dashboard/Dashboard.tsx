import React from 'react';
import UserList from './UserList';
import AddUsers from './AddUsers';

const Dashboard:React.FC = () => {
  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  )
}

export default Dashboard;
