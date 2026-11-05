// General API utilities for ExpressBookReview using Axios
// Fetches book data from the backend API

const API_BASE_URL = 'http://localhost:3000/api';

// Fetch all books
export const fetchAllBooks = () => {
  return fetch(`${API_BASE_URL}/books`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching books:', error));
};

// Fetch books by ISBN
export const fetchBooksByISBN = (isbn) => {
  return fetch(`${API_BASE_URL}/books/isbn/${isbn}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching books by ISBN:', error));
};

// Fetch books by author
export const fetchBooksByAuthor = (author) => {
  return fetch(`${API_BASE_URL}/books/author/${encodeURIComponent(author)}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching books by author:', error));
};

// Fetch books by title
export const fetchBooksByTitle = (title) => {
  return fetch(`${API_BASE_URL}/books/title/${encodeURIComponent(title)}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching books by title:', error));
};

// Fetch book reviews
export const fetchBookReview = (bookId) => {
  return fetch(`${API_BASE_URL}/books/review/${bookId}`)
    .then(response => response.json())
    .catch(error => console.error('Error fetching book review:', error));
};

// Add or update book review (requires authentication)
export const addBookReview = (reviewData, token) => {
  return fetch(`${API_BASE_URL}/books/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(reviewData)
  })
    .then(response => {
      if (!response.ok) throw new Error('Failed to add review');
      return response.json();
    })
    .catch(error => console.error('Error adding book review:', error));
};

// Delete book review (requires authentication)
export const deleteBookReview = (reviewId, token) => {
  return fetch(`${API_BASE_URL}/books/review/${reviewId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(response => {
      if (!response.ok) throw new Error('Failed to delete review');
      return response.json();
    })
    .catch(error => console.error('Error deleting book review:', error));
};

// User registration
export const registerUser = (userData) => {
  return fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .catch(error => console.error('Error registering user:', error));
};

// User login
export const loginUser = (credentials) => {
  return fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .catch(error => console.error('Error logging in:', error));
};