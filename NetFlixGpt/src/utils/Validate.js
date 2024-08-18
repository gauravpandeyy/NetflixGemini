const checkValidData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  )
  const isPassWordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

  if (!isEmailValid) return "Invalid Email Address"
  if (!isPassWordValid) return "Invalid Password"

  if (!isSignInForm && !name) return "Full Name is required"
  if (!isSignInForm && !/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name))
    return "Name is not Valid"

  return null
}

export default checkValidData
