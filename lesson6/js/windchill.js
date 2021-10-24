let hightemp = parseFloat(document.getElementById("high").textContent);
let windspeed = parseFloat(document.getElementById("windspeed").textContent);

let windchill =
  hightemp <= 50 && windspeed > 3
    ? (
        35.74 +
        0.6215 * hightemp -
        35.75 * windspeed ** 0.16 +
        0.4275 * hightemp * windspeed ** 0.16
      ).toFixed(0)
    : "N/A";

document.getElementById("windchill").textContent = windchill;