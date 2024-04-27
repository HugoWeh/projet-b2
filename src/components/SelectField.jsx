import { Field } from "formik"

export const SelectField = (props) => (
  <Field as="select" {...props}>
    <option value="Restaurant">Restaurant</option>
    <option value="Musée">Musée</option>
    <option value="Bar">Bar</option>
    <option value="Parc">Parc</option>
  </Field>
)
