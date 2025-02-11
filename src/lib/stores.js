import { writable } from 'svelte/store';

let initialToken = '';
let initialUserData = {};

if (typeof window !== 'undefined') {
    initialToken = localStorage.getItem('token') || '';
    initialUserData = JSON.parse(localStorage.getItem('userData')) || {};
}

export const authToken = writable(initialToken);
export const isUserLoggedIn = writable(!!initialToken); // Store to track login status
export const userData = writable(initialUserData); // Store to hold user data

// Function to set the token and update login status
export function setAuthToken(token) {
    authToken.set(token);
    isUserLoggedIn.set(!!token);

    if (typeof window !== 'undefined') {
        localStorage.setItem('token', token);
    }
}

// Function to clear the token and update login status
export function clearAuthToken() {
    authToken.set('');
    isUserLoggedIn.set(false);
    userData.set({});

    if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
    }
}

// Function to set the user data
export function setUserData(data) {
    userData.set(data);

    if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(data));
    }
}