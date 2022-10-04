import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputField, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';
import { createAdaptedField } from './react-hook-form-template-utils';

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
const dumbValidator = (value: string | undefined): string | undefined => value?.includes('1')
  ? 'Работать не будем'
  : undefined;

// Компонент формы на RHF
export const ReactHookFormTemplate = () => {
  const { control, handleSubmit } = useForm({ mode: 'onChange', criteriaMode: 'firstError' });

  const onSubmit = (data: any) => alert(
    JSON.stringify(data, null, '  '),
  );

  return (
    <PageContainer>
      <T font="Main/XL" as="h3">
        REACT HOOK FORM CHECK
      </T>

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <AdaptedInputField
            control={control}
            name='name'
            label='Имя'
            rules={{ validate: dumbValidator }}
          />

          <AdaptedInputField
            control={control}
            name='surname'
            label='Фамилия'
            rules={{ validate: dumbValidator }}
          />

          <AdaptedInputField
            control={control}
            name='patronymic'
            label='Отчество'
            rules={{ validate: dumbValidator }}
          />
        </FormContainer>

        <ButtonsContainer>
          <Button dimension='m' type='submit'>
            Click it?
          </Button>
        </ButtonsContainer>
      </form>
    </PageContainer>
  );
};
