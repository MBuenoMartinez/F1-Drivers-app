const validations = (newDriver) => {
  let errors = {};
  const rejexNameAnLastName = /^[a-z0-9_-]{3,15}$/;
  if (newDriver.name.length < 2 || newDriver.name.length > 12)
    errors.name = "The name must be between 2 and 12 characters";

  if (newDriver.name === "") errors.name = "You must enter a name";
  if (newDriver.name.test(rejexNameAnLastName))
    errors.name = "You has entered an invalid name";

  if (newDriver.lastName.length < 2 || newDriver.lastName.length > 12)
    errors.lastName = "The name must be between 2 and 12 characters";

  if (newDriver.lastName === "") errors.lastName = "You must enter a last name";
  if (newDriver.lastName.test(rejexNameAnLastName))
    errors.lastName = "You has entered an invalid last name";
  if (newDriver.nationality === "")
    errors.nationality = "You must enter a nationality";

  if (newDriver.dob) errors.dob = "You must enter a day of birth";

  if (newDriver.teams.length > 5)
    errors.teams = "You must select between 1 and 5 teams";

  return errors;
};
export default validations;
