/*import { Revenue } from './definitions';

// export const formatCurrency = (amount: number) => {
//   return (amount / 100).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });
// };*/

export const formatUrlText = (pathnameOrHash: string): string => {
  let texts = '';
  if (pathnameOrHash === '/') return 'Home';
  if (pathnameOrHash === '/tracker') return 'tracking portal';
  if (pathnameOrHash.includes('status')) return 'Awb Status';
  if (pathnameOrHash.includes('login')) return 'Log In';
  if (pathnameOrHash.includes('sign-up')) return 'Register';
  const splitText = pathnameOrHash.split('#')[1]?.split('_');
  if (!splitText) return splitText;
  for (let text of splitText) {
    texts += `  ${text}`;
  }
  return texts;
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const formatTimeToLocal = (timeStr: string) => {
  const time = timeStr.split(':');
  let hours = time[0];
  let minutes = time[1];
  const isZeroFirst = minutes.split('');
  minutes = isZeroFirst[0] === '0' ? isZeroFirst[1] : minutes; // if mins begin with a zero, e.g 12:05, get last digit which is 5
  const parsedHrs = parseInt(hours);
  const parsedMins = parseInt(minutes);
  let am_pm = parsedHrs >= 12 ? 'pm' : 'am';
  const hrs = parsedHrs % 12;
  hours = hrs ? hrs.toString() : '12'; // a zero should be 12
  minutes = parsedMins < 10 ? '0' + minutes : minutes;
  const formattedTime = hours + ':' + minutes + ' ' + am_pm;
  return formattedTime;
};

export function formatPhoneNumber(input: string) {
  //returns ### #### ####
  input = input.replace(/\D/g, '');
  var size = input.length;
  if (size > 3) {
    input = input.slice(0, 3) + ' ' + input.slice(3, 12);
  }
  if (size > 7) {
    input = input.slice(0, 8) + ' ' + input.slice(8);
  }
  return input;
}
/*
export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};*/

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const validateEmail = (email: string) => {
  const reg = /^[a-z0-9._-]+@[a-z]+\.[a-z]{3,}$/;
  return reg.test(email);
};
