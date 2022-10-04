import React from 'react';
import { connect, Field } from 'formik';

/**
 * Фабрика для адаптации адмираловских филдов под формик
 * @param Component
 * @returns 
 */
export const createAdaptedField = (Component: React.FC<any>) => connect(
  (
    {
      name,
      validate,
      ...rest
    }: any,
  ) => {
    console.error('formik no context', 'rerender');
    return (
      <Field
        name={name}
        validate={validate}
        component={
          ({ field, form: { errors } }: any) => (
            <Component
              {...rest}
              {...field}
              status={errors[name] && 'error'}
              extraText={errors[name]}
            />
          )
        }
      />
    );
  },
);
