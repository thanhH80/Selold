import React from "react";
import { useFormikContext } from "formik";

import Picker from "../Picker";
import ErrorMessage from "./ErrorMessage";

function FormPicker({
  name,
  items,
  width,
  numColumns = 1,
  PickerItemComponent,
  placeholder,
  ...otherProps
}) {
  /**
   * @description: function to display the AppPicker in the Formik
   * @param: name: name of the filed
   * @param: items: items for Flatlist
   * @param: placeholder
   * @param: PickerItemComponent
   */
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <Picker
        numColumns={numColumns}
        items={items}
        placehoder={placeholder}
        onSelectedItem={(item) => setFieldValue(name, item)} //item is name of value, name: name of filed
        selectedItem={values[name]}
        PickerItemsComponent={PickerItemComponent}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormPicker;
