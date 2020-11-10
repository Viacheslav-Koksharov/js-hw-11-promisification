// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

export const users = [
    { name: "Mango", active: true },
    { name: "Poly", active: false },
    { name: "Ajax", active: true },
    { name: "Lux", active: false },
];

export const toggleUserState = (allUsers, userName) => {
    return new Promise((resolve) => {
        const updatedUsers = allUsers.map((user) =>
            user.name === userName ? { ...user, active: !user.active } : user
        );
        resolve(updatedUsers);
    });
};

export const loggers = (updatedUsers) => console.table(updatedUsers);

