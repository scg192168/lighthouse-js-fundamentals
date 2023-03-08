const ageCalculator = function(name, yearOfBirth, currentYear) {
  const age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}
console.log(ageCalculator("Amy", 1978, 2023));
console.log(ageCalculator("Jenny", 1989, 2023));
