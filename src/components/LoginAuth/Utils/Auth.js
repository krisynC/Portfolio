export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users")) || [];
};

export const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
};

export const clearUsers = () => {
    localStorage.removeItem("users");
};

export const loginUser = (name, password) => {
    const users = getUsers();

    return users.find(
        (u) =>
            u.name.trim().toLowerCase() === name.trim().toLowerCase() &&
            u.password === password
    );
};

export const signupUser = (newUser) => {
    const users = getUsers();

    const exists = users.find(
        (u) =>
            u.name.trim().toLowerCase() === newUser.name.trim().toLowerCase()
    );

    if (exists) return { error: "User already exists" };

    users.push(newUser);
    saveUsers(users);

    return { success: true, user: newUser };
};