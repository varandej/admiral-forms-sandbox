import React from 'react';
import { useField } from 'formik';

/**
 * Фабрика для адаптации адмираловских филдов под формик
 * @param Component
 * @returns 
 */
export const createAdaptedField = (Component: React.FC<any>) => (props: any) => {
  const [field, meta, helpers] = useField<string | number | undefined>(props);

  const handleChange = (e: any) => { helpers.setValue(e.target.value); };
  console.error('rerender');
  return (
    <Component
      {...props}
      {...field}
      onChange={handleChange}
      status={meta?.error && 'error'}
      extraText={meta?.error}
    />
  );
};
