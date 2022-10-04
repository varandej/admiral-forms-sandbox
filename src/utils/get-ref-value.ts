import { RefObject } from 'react';

/**
 * Достает значение из рефа привязанного к инпуту
 */
export const getRefValue = (ref: RefObject<HTMLInputElement | null>): string | number | undefined => ref
  ?.current?.value;
