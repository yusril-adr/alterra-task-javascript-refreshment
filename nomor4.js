let bdays = ['10-17','05-19','20-19'];

const formatedBdays = bdays.map((bDay) => (
  bDay.replace('-', '/')
));

console.log(formatedBdays);
