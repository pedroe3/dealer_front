/** @type { AuthState } */
const STATE = {
    token: null,
    isAuthenticated: false,
    user: {
        userName: null,
        firstName: null,
        lastName: null,
        email: null
    },
    dealerId: [],
    roles: [],
    isSuperAdmin: false,
};

export default STATE;
