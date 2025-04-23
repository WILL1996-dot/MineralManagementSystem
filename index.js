// Initialize Supabase client
const supabaseUrl = 'https://mudplvaigphenzayycsl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNjMxODEsImV4cCI6MjA2MDkzOTE4MX0.BQWNKTX1oqdoPlHjFIVik9hEi5BdsDYbHwvC19mbJxg';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Sign Up Function
async function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    alert('Error signing up: ' + error.message);
  } else {
    alert('Sign-up successful! Please check your email to confirm.');
  }
}

// Log In Function
async function logIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    alert('Error logging in: ' + error.message);
  } else {
    alert('Login successful!');
  }
}

// Log Out Function
async function logOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert('Error logging out: ' + error.message);
  } else {
    alert('Logged out successfully.');
  }
}
