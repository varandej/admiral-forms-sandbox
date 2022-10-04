import React from 'react';
import { Form } from 'react-final-form';
import styled from 'styled-components';
import { Button, InputField, T } from '@admiral-ds/react-ui';
import { createAdaptedField } from './final-form-template-utils';

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

// Данные формы
const INITIAL_VALUES = {};
const dumbValidator = (value: string | undefined): string | null => value?.includes('1')
  ? 'Работать не будем'
  : null;

// Компонент формы на FF
export const FinalFormTemplate = () => {
  // обработчик сабмита
  const handleSunmit = (values: any) => alert(
    JSON.stringify(values, null, '  '),
  );

  return (
    <PageContainer>
      <T font="Main/XL" as="h3">
        FINAL FORM CHECK
      </T>

      <Form
        initialValues={INITIAL_VALUES}
        onSubmit={handleSunmit}
        subscription={{}}
        render={
          ({ handleSubmit }: any) => {
            console.log('react final form', 'general form rerender');

            return (
              <form onSubmit={handleSubmit}>
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
                  <Button dimension='m' type='submit'>
                    Click it!
                  </Button>
                </ButtonsContainer>
              </form>
            );
          }
        }
      />
    </PageContainer>
  );
};
