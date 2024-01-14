export const inputValidation = (
  value: string,
  type: string,
  repeatPassword?: string
) => {
  if (value == undefined) {
    return false;
  }

  if (type === 'email') {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value)) {
      return false;
    }
  }

  if (type == 'text') {
    const universalRegex = /^[a-zA-Z0-9!@#$%^&*]{6,}$/;
    if (!universalRegex.test(value)) {
      return false;
    }
  }

  if (type == 'none') {
    if (value.length < 1) {
      return false;
    }
  }

  if (repeatPassword && value !== repeatPassword) {
    return false;
  }

  return true;
};
