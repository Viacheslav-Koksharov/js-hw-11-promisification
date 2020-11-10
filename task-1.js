// Задание 1
// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Значением исполнившегося промиса должно быть то кол - во миллисекунд которое передали во время вызова функции delay.

export const delay = ms => {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved(ms);
        }, ms);
    });
};

export const logger = time => console.log(`Resolved after ${time}ms`);