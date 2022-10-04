import React from 'react';
import { useField } from 'react-final-form';

// Фабрика адаптированных филдов для FF
export const createAdaptedField = (Component: any) => (
  {
    name,
    validate,
    ...rest
  }: any,
) => {
  const { input, meta } = useField(
    name,
    {
      validate,
      subscription: { error: true, value: true },
    },
  );

  console.log('react final form', 'rerender field');

  return (
    <Component
      {...rest}
      {...input}
      status={meta.error && 'error'}
      extraText={meta.error}
    />
  );
};
