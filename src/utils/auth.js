// mock = dado que deveria existir mas não existe
export const MOCK_USER = {
    email: 'teste@email.com',
    password : "123456"
}

export function login(email, password) {
    return email === MOCK_USER.email && password === MOCK_USER.password
}

export function isAuthenticated() {
    return localStorage.getItem('auth') === 'true'
}

export function logout(){
    localStorage.removeItem('auth')
}