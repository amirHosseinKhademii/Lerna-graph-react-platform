const requiredValidation = (value, required) => {
  if (required && !value) return "لطفا این مورد را پر کنید";
};

const maxValidation = (value, max) => {
  if (max && value.length > max)
    return `This field must be equal or less than ${max} characters.`;
};

const minValidation = (value, min) => {
  if (min && value.length < min)
    return `This field must be equal or more than ${min} characters.`;
};

const laterValidation = (value, later) => {
  if (later) {
    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const start = new Date(value);
    const currentYear = new Date().getFullYear();
    const year = new Date(value).getFullYear();
    if (start <= today) {
      return "The date should be later than today.";
    }
    if (year < currentYear - 100 || year > currentYear + 100)
      return "Bad format";
  }
};

export { requiredValidation, maxValidation, minValidation, laterValidation };
