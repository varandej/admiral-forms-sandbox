import React from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { Button, T, InputField } from '@admiral-ds/react-ui';
import { createAdaptedField } from './formik-template-utils';

// Адаптированный филд
const AdaptedInputField = createAdaptedField(InputField);

// Компоненты разметки
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 50px;
  > * { margin-bottom: 35px }
`;
const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;

  > * { margin-right: 20px }
`;
const ButtonsContainer = styled.div`
  position: relative;
  display: block;
`;

// Данные для формы
const INITIAL_VALUES = {};
const dumbValidator = (value: string | undefined): string | null => value?.includes('1')
  ? 'Работать не будем'
  : null;
const onSubmit = (values: any) => alert(
  JSON.stringify(values, null, '\t'),
);

// Компонент формы
export const FormikTemplate = () => (
  <PageContainer>
    <T font="Main/XL" as="h3">
      FORMIK CHECK
    </T>

    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onSubmit}
    >
      <Form>
        <FormContainer>
          <AdaptedInputField
            name='name'
            label='Имя'
            validate={dumbValidator}
          />

          <AdaptedInputField
            name='surname'
            label='Фамилия'
            validate={dumbValidator}
          />

          <AdaptedInputField
            name='patronymic'
            label='Отчество'
            validate={dumbValidator}
          />
        </FormContainer>

        <ButtonsContainer>
          <Button dimension='m'>Click it?</Button>
        </ButtonsContainer>
      </Form>
    </Formik>
  </PageContainer>
);
