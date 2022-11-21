


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
      time: `${time[0] < 10 ? '0' : ''}${time.join('').substring(0, time.length - charsToSubtract)}`,
      timeType: type
   }; // return adjusted time or original string
}

export const convertTime12to24 = (time12h) => {
   const [time, modifier] = time12h.split(' ');

   let [hours, minutes] = time.split(':');

   if (hours === '12') {
      hours = '00';
   }

   if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
   }

   return `${hours}:${minutes}`;
}

export const getCheckedString = (arr) => {
   let strArr = []
   arr.map(item => {
      if (item.checked) strArr.push(item.text)
   })
   return strArr
}

export const getFormattedDate = argDate => {
   const date = new Date(argDate)
   let year = date.getFullYear()
   let month = date.getMonth()
   let dateNum = date.getDate()

   if (month < 10) {
      month = `0${month + 1}`
   }
   if (dateNum < 10) {
      dateNum = `0${dateNum}`
   }
   let dateFormatted = `${year}-${month}-${dateNum}`
   return dateFormatted
}

//  tConvert ('18:00:00');