export const THE_DAY = 5;

type Candidate = ConstructorParameters<typeof Date>[0];

const isitfriday = (candidate?: Candidate) => {
  const theDate = new Date(candidate ?? Date.now());

  if (`${theDate}`.toLowerCase() === 'invalid date')
    throw new Error('Invalid input');

  return theDate.getDay() === THE_DAY;
};

export default isitfriday;
