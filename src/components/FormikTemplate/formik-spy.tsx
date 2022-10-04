import React from 'react';
import { useFormikContext } from 'formik';

// Компонент шпиона чисто поиграться
export const FormikSpy = () => {
  const { values } = useFormikContext();

  console.warn(values);

  return <span>Шпион здесь</span>
};
