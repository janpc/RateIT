import { Reset } from 'styled-reset'
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { get } from '@database'
import { Main } from '@/assets/style'
import Header from '@/components/Header'
import List from '@/views/List'
import Course from '@/views/Course'
import Educator from '@/views/Educator'

function App() {
  useEffect(() => {
    get({database: 'educators'});
  });

  return (
    <Router>
      <Main>
        <Reset />
        <Toaster/>
        <Header />
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/educator/:id" element={<Educator />} />
            <Route path="/course/:id" element={<Course />} />
          </Routes>
      </Main>
    </Router>
  );
}

export default App;
