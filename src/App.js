// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/detail';
import Checkout from './Pages/Checkout/checkout';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import AdminRoute from './Guards/AdminRoute/AdminRoute';
import HomeLayout from './Layouts/HomeLayout/HomeLayout';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';
import CheckoutRoute from './Guards/CheckoutRoute/CheckoutRoute';
import AdminLayout from './Layouts/AdminLayout/AdminLayout';
import UserManagement from './Pages/UserManagement/UserManagement';
import MovieManagement from './Pages/MovieMangement/MovieManagement';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={['/', '/detail/:movieId']}>
          <HomeLayout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/detail/:movieId' component={Detail} />
            </Switch>
          </HomeLayout>
        </Route>

        <CheckoutRoute path="/checkout/:timeId" component={Checkout} />

        <Route exact path={['/login', '/signup']}>
          <AuthLayout>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
            </Switch>
          </AuthLayout>
        </Route>

        {/* <Route exact path={['/admin/user']}>
          <AdminLayout>
            <Switch>
              <Route path='/admin/user' component={UserManagement} />
              <Route path='/admin/user' render={(props) => {
                const maLoaiNguoiDung = 'KhachHang';
                if (maLoaiNguoiDung !== 'QuanTri') {
                  return <Redirect to='/' />
                }
                return <UserManagement />
              }} />
            </Switch>
          </AdminLayout>
        </Route> */}

        <Route exact path={["/admin/user", "/admin/movie"]}>
          <AdminLayout >
            <Switch >
              <AdminRoute exact path='/admin/user' component={UserManagement} />
              <AdminRoute exact path='/admin/movie' component={MovieManagement} />
            </Switch>
          </AdminLayout>
        </Route>

        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
