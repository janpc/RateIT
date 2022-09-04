import { Label, FormInput, Error } from '@/assets/style'

export default function Input({label, name, type, id, onChange, error, placeholder}) {
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <FormInput 
        type={type}
        placeholder={placeholder}
        id={name}
        onChange={onChange}
        error={!!error}
      />
      <Error display={error} >{error}</Error>
    </>
  );
}