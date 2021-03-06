import React from "react";
import FormTemplate from "./FormTemplate";
import PropTypes from "prop-types";

export default function EditKegForm ({
  keg,
  onEditKeg
}) {

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      quantity: keg.quantity,
      id: keg.id
    })
  }
  return (
    <>
      <FormTemplate
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </>
  );
}

EditKegForm.propTypes = {
  keg: PropTypes.object,
  onEditKeg: PropTypes.func
};

