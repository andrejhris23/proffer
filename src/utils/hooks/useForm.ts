import { zodResolver } from '@hookform/resolvers/zod';
import {
useForm as useHookForm,
UseFormProps as UseHookFormProps,
} from 'react-hook-form'
import { ZodSchema, TypeOf } from 'zod';

// * Extend hook-form props but also add zod schema
type UseFormProps<T extends ZodSchema<any>> = {
  schema: T
} & UseHookFormProps<TypeOf<T>>;

export const useForm = <T extends ZodSchema<any>>({
  schema,
  ...formConfig
}: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema),
  });
};