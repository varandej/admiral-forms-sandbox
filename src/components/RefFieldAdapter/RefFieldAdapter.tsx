import React, { ChangeEvent } from 'react';

/**
 * Адаптер филда для реализации человеческой валидации
 */
export const RefFieldAdapter = React.forwardRef<HTMLInputElement, any>(
  ({ component: Component, validate, ...rest }, ref) => {
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const valRes = typeof validate == 'function'
        && validate(e.target?.value);
      
      if (valRes) { setError(valRes); }
      else { error && setError(null); }
    };

    return <Component
      {...rest}
      status={error && 'error'}
      extraText={error}
      ref={ref}
      onChange={handleChange}
    />;
  },
);