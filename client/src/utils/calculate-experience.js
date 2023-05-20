import {differenceInDays, differenceInMonths, differenceInYears} from 'date-fns';

export const calculateExperience = (startDate) => {
    const start = new Date(startDate);
    const currentDate = new Date().toISOString();
    const current = new Date(currentDate);

    const yearsOfExperience = differenceInYears(current, start);
    const monthsOfExperience = differenceInMonths(current, start);
    const daysOfExperience = differenceInDays(current, start);

    if (yearsOfExperience > 4) {
        return `${yearsOfExperience} лет`;
    } else if (yearsOfExperience === 1) {
        return `${yearsOfExperience} год`;
    } else if (yearsOfExperience > 1 && yearsOfExperience < 5) {
        return `${yearsOfExperience} года`;
    }

    if (monthsOfExperience > 4) {
        return `${monthsOfExperience} месяцев`;
    } else if (monthsOfExperience === 1) {
        return `${monthsOfExperience} месяц`;
    } else if (monthsOfExperience > 1 && monthsOfExperience < 5) {
        return `${monthsOfExperience} месяца`;
    }

    if (daysOfExperience > 4) {
        return `${daysOfExperience} дней`;
    } else if (daysOfExperience === 1) {
        return `${daysOfExperience} день`;
    } else if (daysOfExperience > 1 && daysOfExperience < 5) {
        return `${daysOfExperience} дня`;
    }
}