export default function handleSubmitHelper(
  initialValues,
  validation,
  setError
) {
  let status = true;
  const newErrors = {};
  validation.forEach((rule) => {
    const value = (initialValues[rule.key] || "").trim();

    if (rule.required && !value) {
      (newErrors[rule.key] = `${rule.key} field is required`), (status = false);
    }
    if (value.length < rule.maxLength) {
      (newErrors[
        rule.key
      ] = `${rule.key} field length must be greater than or equal to ${rule.maxLength}`),
        (status = false);
    }
    if (rule.key === "email") {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailRegex.test(initialValues.email);
      if (!isValid) {
        (newErrors[rule.key] = `Enter valid ${rule.key} address`),
          (status = false);
      }
    }
    setError(newErrors);
    if (status) {
      setError({});
    }
  });

  if (status) {
    let hasInstance = false;

    for (let key in initialValues) {
      if (initialValues[key] instanceof File) {
        hasInstance = true;
      }
    }
    if (hasInstance) {
      const formData = new FormData();
      for (let key in initialValues) {
        formData.append(key, initialValues[key]);
      }
      return formData;
    } else {
      return JSON.stringify(initialValues);
    }
  }
}
