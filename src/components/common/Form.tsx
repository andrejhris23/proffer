import {
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
} from 'react-hook-form';
import { ComponentProps } from 'react';
import { useForm } from '@/src/utils/hooks/useForm';

type FormProps<T extends FieldValues = any> = {
  form: UseFormReturn<T>,
  onSubmit: SubmitHandler<T>
} & Omit<ComponentProps<'form'>, 'onSubmit'>;

const Form = <T extends FieldValues>({
  form,
  onSubmit,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      {/* the form passed here is the return value of useForm() hook */}
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        {/* disable inputs when submitting the form*/}
        <fieldset disabled={form.formState.isSubmitting}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  )
}

export default Form;