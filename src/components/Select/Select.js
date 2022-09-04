import { Label, FormSelect, Error } from '@/assets/style'

export default function Select({options, label, name, id, onChange, error}) {
  options = [{value: null, text: 'Selecciona una opción'}, ...options]
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <FormSelect name={name} id={id} onChange={onChange} error={!!error}>
        {
        options.map(
          ({value, text}) =>
            <option key={value} value={value}>{text}</option>
        )}
      </FormSelect>
      <Error display={error} >{error}</Error>
    </>
  );
}