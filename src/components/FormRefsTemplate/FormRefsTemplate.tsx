import React from 'react';
import styled from 'styled-components';
import { Button, T, InputField } from '@admiral-ds/react-ui';
import { getRefValue } from '../../utils';
import { RefFieldAdapter } from '../RefFieldAdapter';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  > * { margin-bottom: 35px }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;

  > * { margin-right: 20px }
`;
const ButtonsContainer = styled.div`
  position: relative;
  display: block;
`;

const dumbValidator = (value: string | undefined): string | null => value?.includes('1')
  ? 'Работать не будем'
  : null;

export const FormRefsTemplate = () => {
  const nameFieldRef = React.useRef<HTMLInputElement | null>(null);
  const surnameFieldRef = React.useRef<HTMLInputElement | null>(null);
  const patronymicFieldRef = React.useRef<HTMLInputElement | null>(null);

  const handleClickItBtnClick = () => {
    alert(
      JSON.stringify(
        {
          name: getRefValue(nameFieldRef),
          surname: getRefValue(surnameFieldRef),
          patronymic: getRefValue(patronymicFieldRef),
        },
        null,
        '   ',
      ),
    );
  };

  return (
    <PageContainer>
      <T font="Main/XL" as="h3">
        REFS FORM CHECK
      </T>

      <FormContainer>
        <RefFieldAdapter
          label='Имя'
          ref={nameFieldRef}
          component={InputField}
          validate={dumbValidator}
        />
        <InputField label='Фамилия' ref={surnameFieldRef} />
        <InputField label='Отчество' ref={patronymicFieldRef} />
      </FormContainer>

      <ButtonsContainer>
        <Button
          dimension='m'
          onClick={handleClickItBtnClick}
        >
          Click it!
        </Button>
      </ButtonsContainer>
    </PageContainer>
  );
};
