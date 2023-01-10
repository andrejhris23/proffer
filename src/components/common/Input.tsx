import { ComponentProps, forwardRef } from "react";
import FieldError from './FieldError';

type InputProps = {
  label?: string,
  className?: string,
  labelStyles?: string,
  errorFieldStyles?: string,
  renderWithoutLabel?: boolean
} & ComponentProps<'input'>;

// ***
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, className, labelStyles, errorFieldStyles, renderWithoutLabel, type = "text", ...props },
  ref
) {
  return (
    <div>
      { !renderWithoutLabel && <label className={labelStyles} htmlFor="">{label}</label> }
      <input type={type} ref={ref} {...props} className={className}/>
      <FieldError name={props.name} className={errorFieldStyles}/>
    </div>
  );
});