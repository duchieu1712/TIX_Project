import React, {useEffect} from 'react';

const UserManagement = () => {
    useEffect(() => {
        document.title = "TIX - Quản lý người dùng";
      }, []);
    return (
        <div>
            UserManagement
        </div>
    );
}

export default UserManagement;
