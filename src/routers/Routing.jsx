import React from 'react'
import { Route, Routes } from 'react-router'
// import TodoPage from '../pages/TodoPage'
// import Drawers from '../components/Drawers';
// import Student from '../pages/Student';
import Error from '../pages/Error';
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
import Drawers from '../components/Drawers';
import TodoPage from '../pages/TodoPage';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
// import ProtectedRoute from './ProtectedRoute';

const Routing = () => {
      return (
            <Routes>
                  <Route path="/" element={<PublicRoute />}>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Error />} />
                  </Route>

                  {/* protected route */}
                  <Route path="/" element={<Drawers />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/todopage" element={<TodoPage />} />
                  </Route>
            </Routes>
      )
}

export default Routing
