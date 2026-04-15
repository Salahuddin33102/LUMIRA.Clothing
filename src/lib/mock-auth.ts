export type MockUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
};

const STORAGE_KEY = "lumira-mock-users";
const defaultUsers: MockUser[] = [
    {
        id: "1",
        name: "Admin User",
        email: "admin@lumira.com",
        password: "Admin123!",
        role: "admin",
    },
    {
        id: "2",
        name: "Demo User",
        email: "demo@lumira.com",
        password: "Password123",
        role: "user",
    },
];

const isBrowser = () => typeof window !== "undefined";

function loadUsers(): MockUser[] {
    if (!isBrowser()) {
        return defaultUsers;
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
        return defaultUsers;
    }

    try {
        return JSON.parse(stored) as MockUser[];
    } catch {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers));
        return defaultUsers;
    }
}

function saveUsers(users: MockUser[]) {
    if (!isBrowser()) {
        return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
}

export function getMockUsers(): MockUser[] {
    return loadUsers();
}

export function authenticateMockUser(email: string, password: string) {
    const users = loadUsers();
    const user = users.find((item) => item.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        return { success: false, error: "No user found with that email." };
    }

    if (user.password !== password) {
        return { success: false, error: "Invalid email or password." };
    }

    return {
        success: true,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
}

export function registerMockUser(name: string, email: string, password: string) {
    const users = loadUsers();

    if (users.some((item) => item.email.toLowerCase() === email.toLowerCase())) {
        return { success: false, error: "A user with that email already exists." };
    }

    const nextId = String(users.length + 1);
    const newUser: MockUser = {
        id: nextId,
        name,
        email,
        password,
        role: "user",
    };

    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    return {
        success: true,
        user: { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
    };
}
