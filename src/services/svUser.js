import { getAuthHeader } from '../helpers/get-auth-header';

export const userService = {
    login,
    logout,
    register,
	getById,
};

function login(username, password) {
	console.log("In login, userService");
	
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

	console.log(requestOptions);
	
    return fetch('/users/authenticate', requestOptions)
        .then(response => {
			console.log("response: ", response);
            if (!response.ok) { 
                return Promise.reject(response.statusText);
            }

            return response.json();
        })
        .then(user => {
			console.log("user: ", user);
            // login successful if there's a jwt token in the response
            if (user && user.token) {
				// store user details and jwt token in local storage
				// to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch('/users/register', requestOptions).then(handleResponse);
}

function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: getAuthHeader()
    };

    return fetch('/users/' + _id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) { 
        return Promise.reject(response.statusText);
    }

    return response.json();
}