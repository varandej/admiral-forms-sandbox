import React from 'react';
import { useController } from 'react-hook-form';

/**
 * Фабрика адаптированных к RHF компонентов
 */
export const createAdaptedField = (Component: any) => (
  {
    control,
    defaultValue = '',
    name,
    rules,
    ...rest
  }: any
) => {
  const { field, fieldState: { error } } = useController({ 
    name, control, rules, defaultValue,
  });

  console.warn(error);
  return (
    <Component
      {...rest}
      {...field}
      status={error && 'error'}
      extraText={error?.message}
    />
  );
};
