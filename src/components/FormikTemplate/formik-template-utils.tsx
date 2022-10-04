import React from 'react';
import { useField } from 'formik';

/**
 * Фабрика для адаптации адмираловских филдов под формик
 */
export const createAdaptedField = (Component: React.FC<any>) => (props: any) => {
  const [field, meta] = useField<string | number | undefined>(props);

  console.error('formik check', 'rerender');

  return (
    <Component
      {...props}
      {...field}
      status={meta?.error && 'error'}
      extraText={meta?.error}
    />
  );
};
