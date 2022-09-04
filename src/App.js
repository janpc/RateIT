import { Reset } from 'styled-reset'
import { useEffect } from 'react';

import { get } from '@/utils/firebase'
import { Main } from '@/assets/style'
import Header from './components/Header'
import AddForm from './components/AddForm'

function App() {
  useEffect(() => {
    get({database: 'educators'});
  });

  return (
    <Main>
      <Reset />
      <Header />
      <AddForm />
    </Main>
  );
}

export default App;
