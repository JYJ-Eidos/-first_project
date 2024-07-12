export const needValidationEndpoints = {
  email: '/check-email',
  nickname: '/check-nickname',
  phoneNumber: '/check-phone-number',
};

export const validateData = {
  email(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  },
  password(password) {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passwordRegex.test(password);
  },
  phoneNumber(phoneNumber) {
    const phoneRegex = /^010\d{8}$/;
    return phoneRegex.test(phoneNumber);
  },
  nickname(nickname) {
    return nickname.length >= 2 && nickname.length <= 20;
  },
};
