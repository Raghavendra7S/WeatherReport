export function getUVLabel(v){
    if(v<=2) return "Low"
    if(v<=5) return "Moderate"
    if(v<=7) return "High"
    if(v<=10) return "very High"
    return "Extreme"
}
export function getHumidityLabel(v){
  if(v < 40) return "Low";
  if(v <= 70) return "Normal";
  return "High";
}

// Visibility label
export function getVisibilityLabel(v){
  if(v > 10) return "Very Clear Air";
  if(v > 5) return "Clear";
  return "Low Visibility";
}

// Wind label
export function getWindLabel(v){
  if(v < 5) return "Calm";
  if(v < 15) return "Light Breeze";
  if(v < 30) return "Windy";
  return "Strong Wind";
}

// Cloud cover label
export function getCloudLabel(v){
  if(v < 20) return "Clear Sky";
  if(v < 50) return "Partly Cloudy";
  if(v < 80) return "Cloudy";
  return "Overcast";
}
