type UserRoles = 'admin' | 'user' | 'guest';

// Create a Record type where each key is one of the `UserRoles` and the value is a string
const userPermissions: Record<UserRoles, string> = {
    admin: 'Full Access',
    user: 'Limited Access',
    guest: 'Read-Only Access',
};

console.log(userPermissions);