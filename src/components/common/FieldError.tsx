import { useFormContext } from 'react-hook-form';

const FieldError = ({name, className} : {name?: string, className?: string}) => {
  // the useFormContext hook returns the current state of hook form.
  const { formState: { errors }} = useFormContext();

  if(!name) return null;

  const error = errors[name];

  if(!error) return null;

  return <span className={className}>{error.message as string}</span>
}

export default FieldError;