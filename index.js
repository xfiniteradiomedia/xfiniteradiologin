// Initialize Firebase with your own configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEwzgpAAKTJHriSRiBYqZIYuG04WMtAC0",
  authDomain: "xfiniteradio-a66c9.firebaseapp.com",
  databaseURL: "https://xfiniteradio-a66c9-default-rtdb.firebaseio.com",
  projectId: "xfiniteradio-a66c9",
  storageBucket: "xfiniteradio-a66c9.appspot.com",
  messagingSenderId: "891913288263",
  appId: "1:891913288263:web:d049046f53a8300f634f62",
  measurementId: "G-SSJVY3WZYF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Function to handle form submission
async function handleLogin(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get user input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Sign in with email and password using Firebase
    await firebase.auth().signInWithEmailAndPassword(email, password);

    // Redirect to the dashboard page if login is successful
    window.location.href = 'dashboard.html';
  } catch (error) {
    // Handle login errors
    console.error(error);
    alert('Invalid credentials. Please try again.');
  }
}

// Function to handle the "Clear" button click
function handleClear() {
  document.getElementById('login-form').reset();
}

// Event listeners
document.getElementById('login-form').addEventListener('submit', handleLogin);
document.getElementById('clear-btn').addEventListener('click', handleClear);
