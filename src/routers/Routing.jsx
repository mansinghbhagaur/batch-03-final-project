import React from 'react'
import { Route, Routes } from 'react-router'
import TodoPage from '../pages/TodoPage'
import Drawers from '../components/Drawers';
import Student from '../pages/Student';
import Error from '../pages/Error';
import Login from '../pages/Login';

const Routing = () => {
      return (
            <Routes>
                  {/* <Route path="/" element={<Drawers />}>
                        <Route path="/" element={<TodoPage />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="*" element={<Error />} />
                  </Route> */}
                  <Route path="/" element={<Login />} />
            </Routes>
      )
}

export default Routing
