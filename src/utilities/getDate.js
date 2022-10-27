const convertDate = (date) => {

  const dateOfBirth = new Date(date);
  const y = dateOfBirth.getFullYear();
  const m = dateOfBirth.getMonth();
  const d = dateOfBirth.getDate();

  if (`${d}.${m}.${y}` === `NaN.NaN.NaN`)  {
    return ''
  } else {
    return (
      `${d}.${m}.${y}`
    )
  }
}

export { convertDate }