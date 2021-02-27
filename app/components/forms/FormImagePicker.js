import React from "react";
import { useFormikContext } from "formik";

import { ErrorMessage } from ".";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  const imgUris = values[name];

  const handelAdd = (uri) => {
    setFieldValue(name, [...imgUris, uri]);
  };

  const handelRemove = (uri) => {
    setFieldValue(
      name,
      imgUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imgUris={imgUris}
        onAddImg={handelAdd}
        onRemoveImg={handelRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
