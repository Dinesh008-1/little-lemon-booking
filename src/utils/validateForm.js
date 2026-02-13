export function validateForm(data) {
  const errors = {};

  if (!data.name) errors.name = "Name required";
  if (!data.date) errors.date = "Select date";
  if (!data.time) errors.time = "Select time";

  return errors;
}
