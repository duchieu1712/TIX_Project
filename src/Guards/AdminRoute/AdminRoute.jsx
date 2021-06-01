import React from 'react';
// import { useSelector } from 'react-redux';
import {connect} from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// HOC: 1 function có tham số là 1 component khác
const AdminRoute = (props) => {
    // const { currentUser } = useSelector(state => state.userReducer)
    const { component: Component, currentUser, ...routerProps } = props;
    return (
        // Kiểm tra xem đã đăng nhập chưa và maLoaiNguoiDung là có hợp lệ hay không
        <Route {...routerProps} render={(props) => {
            console.log(currentUser);
            if (currentUser) {
                // Đã đăng nhập
                if (currentUser.maLoaiNguoiDung === 'QuanTri') {
                    // Là admin
                    return <Component {...props} />
                }
                // Không phải admin
                return <Redirect to='/' />
            }
            // Chưa đăng nhập
            return <Redirect to='/login' />
        }} />
    );
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(mapStateToProps,null)(AdminRoute);

