const birthday = '1992-12-24';

function isOverFourteen(date) {
  const birthDate = new Date(date);
  const now = new Date();
  let fullYears = now.getFullYear() - birthDate.getFullYear();
  if (now.getMonth() < birthDate.getMonth() ||
      now.getDate() < birthDate.getDate()) {
        fullYears--;
      }
  return fullYears > 14;
}

console.log(isOverFourteen(birthday));