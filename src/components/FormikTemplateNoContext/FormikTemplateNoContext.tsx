import React from 'react';
import { withFormik } from 'formik';
import styled from 'styled-components';
import { Button, InputField, T } from '@admiral-ds/react-ui';
import { createAdaptedField } from './formik-template-no-context-utils';

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
const dumbValidator = (value: string | undefined): string | null => value?.includes('1')
  ? 'Работать не будем'
  : null;

// Компонент формы на формике без использования хуков контекста
const FormikTemplateNoContextContainer = ({ handleSubmit }: any) => (
  <PageContainer>
    <T font="Main/XL" as="h3">
      FORMIK CHECK NO CONTEXT
    </T>

    <form onSubmit={handleSubmit}>
      <FormContainer>
        <AdaptedInputField
          label='Имя'
          name='name'
          validate={dumbValidator}
        />

        <AdaptedInputField
          label='Фамилия'
          name='surname'
          validate={dumbValidator}
        />

        <AdaptedInputField
          label='Отчестов'
          name='Patronymic'
          validate={dumbValidator}
        />
      </FormContainer>

      <ButtonsContainer>
        <Button dimension='m' type='submit'>
          Click it!
        </Button>
      </ButtonsContainer>
    </form>
  </PageContainer>
);

// Подключение ХОКа формика
export const FormikTemplateNoContext = withFormik({
  handleSubmit: (values: any) => {
    alert(
      JSON.stringify(values, null, '   '),
    );
  },
})(FormikTemplateNoContextContainer);
