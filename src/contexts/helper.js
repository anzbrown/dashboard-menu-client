import { auth } from '../firebase';

/**
 * firebase signup method
 * if firebase is to be removed later, just update this one function
 * @param email
 * @param password
 * @returns {Promise<firebase.auth.UserCredential>}
 */
export async function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

/**
 * firebase login method
 * if firebase is to be removed later, just update this one function
 * @param email
 * @param password
 * @returns {Promise<firebase.auth.UserCredential>}
 */
export async function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

/**
 * logout the session for the current logged in user
 * @returns {Promise<void>}
 */
export async function logout() {
    return auth.signOut();
}

/**
 * reset the password for the account with email
 * @param email - address to send the reset link to
 * @returns {Promise<void>}
 */
export async function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
}

/**
 * update email for the current logged in user
 * @param email - new email
 * @returns {Promise<void>}
 */
export async function updateEmail(email) {
    return auth.currentUser.updateEmail(email);
}

/**
 * update password for the current logged in user
 * @param password - new password
 * @returns {Promise<void>}
 */
export async function updatePassword(password) {
    return auth.currentUser.updatePassword(password);
}
