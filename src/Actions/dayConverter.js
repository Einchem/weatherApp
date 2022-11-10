

 const dayConverter = (dates) => { 

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = new Date(dates);

  return weekday[d.getDay()];

}
export default dayConverter;



