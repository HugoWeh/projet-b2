import { Field } from "formik"

export const SelectField = ({ setCurrent, onChange, ...props }) => {
  const handleChange = (e) => {
    if (setCurrent) {
      setCurrent(e.target.value)
    }

    if (onChange) {
      onChange(e)
    }
  }

  return (
    <Field as="select" onChange={handleChange} {...props}>
      <option value="Restaurant">Restaurant</option>
      <option value="Musée">Musée</option>
      <option value="Bar">Bar</option>
      <option value="Parc">Parc</option>
    </Field>
  )
}
