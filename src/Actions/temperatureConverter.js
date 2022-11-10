
const temperatureConverter= (temp) =>{ 
  const celcius=(5/9)*(temp-32)

  return  Math.round(celcius);
  
}
export default temperatureConverter;
