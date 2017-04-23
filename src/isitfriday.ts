const FRIDAY: number = 5;

const isitfriday: IIsItFriday = function (today) {
  return (today || new Date()).getDay() === FRIDAY;
};

export interface IIsItFriday {
  (today?: Date): boolean;
}

export default isitfriday;
