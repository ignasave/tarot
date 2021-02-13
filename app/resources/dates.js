function randomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function dateExists(day, month, year) {
    month--;
    var dateObj = new Date(year, month, day);
    if(dateObj.getFullYear() == year && dateObj.getMonth() == month && dateObj.getDate() == day){
        return true
    }
    return false
}

export const get3RandomDates = (birthYear) => {
	const personAge = new Date().getFullYear() - birthYear;
	const personLifeLeft = 75 > personAge ? 75 - personAge : 100 - personAge;
	const correctYearLimit = 30 > personLifeLeft ? personLifeLeft : 30;
	const dates = {
		days: randomInteger(10, 200),
		months: randomInteger(5, 45),
		years: randomInteger(1, correctYearLimit),
	};

	return dates;
};
