import { useState } from 'react';
import { FaSearch} from 'react-icons/fa';
import Dialogue from '@/components/Dialogue'
import { Header, HeaderContent, Logo, SearchForm, SearchInput, SearchButton, CloseButton } from './styles'

export default function H() {
  const [show, setShow] = useState(false);
  return (
      <Header>
        <HeaderContent>
          <Logo width="180"/>
          <CloseButton type="button" onClick={() => setShow(true)}>
            <FaSearch/>
          </CloseButton>
        </HeaderContent>
        <Dialogue show={show} close={() => setShow(false)}>
          <SearchForm>
              <SearchInput type="text" placeholder="Buscar..."></SearchInput>
              <SearchButton type="submit">Buscar</SearchButton>
          </SearchForm>
        </Dialogue>
      </Header>
  );
}