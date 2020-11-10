// // Задание 3
// // Перепиши функцию makeTransaction() так, чтобы она не использовала callback - функции onSuccess и onError,
// // а принимала всего один параметр transaction и возвращала промис.



const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

export const makeTransaction = ({ id }) => {
    const delay = randomIntegerFromInterval(200, 500);

    return new Promise((resolve, reject) => {
        const canProcess = Math.random() > 0.3;

        setTimeout(() => {
            if (canProcess) {
                resolve({ id, delay });
            }
            reject({ id });
        }, delay);
    })
};


export const logSuccess = ({ id, delay }) => {
    console.log(`Transaction ${id} processed in ${delay}ms`);
};

export const logError = ({ id }) => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
};



