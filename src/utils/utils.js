export function tConvert(time) {
   // Check correct time format and split into components
   time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
   let type = ''
   if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? type = 'AM' : type = 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
   }

   const charsToSubtract = time[0] < 10 ? 2 : 1

   return {
      time: time.join('').substring(0, time.length - charsToSubtract),
      timeType: type
   }; // return adjusted time or original string
}

//  tConvert ('18:00:00');