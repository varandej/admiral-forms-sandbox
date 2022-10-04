import React from 'react';
import styled from 'styled-components';
import {
  FormRefsTemplate,
  FormikTemplate,
  ReactHookFormTemplate,
  FormikTemplateNoContext,
  FinalFormTemplate,
} from './components';
import './App.css';

const WholeGeneralGigaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  justify-content: center;

  > * { margin-bottom: 35px }
`;

function App() {
  return (
    <WholeGeneralGigaWrapper>
      <FormRefsTemplate />
      <FormikTemplate />
      <FormikTemplateNoContext />
      <ReactHookFormTemplate />
      <FinalFormTemplate />
    </WholeGeneralGigaWrapper>
  );
}

export default App;
