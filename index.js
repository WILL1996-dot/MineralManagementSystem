import { createClient } from '@supabase/supabase-js'

// Initialize Supabase (ONCE at the top)
const supabaseUrl = 'https://mudplvaigphenzayycsl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTM2MzE4MSwiZXhwIjoyMDYwOTM5MTgxfQ.69aRSlFopKOh9lFjPz8GZiiwCwwLzm8DapFpxSjpkAE'
const supabase = createClient(supabaseUrl, supabaseKey)

// Remove the duplicate signUp function and keep this one:
async function signUp() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  document.getElementById("message").textContent = error
    ? error.message
    : "Signup successful! Check your email.";
}

async function logIn() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  document.getElementById("message").textContent = error
    ? error.message
    : "Login successful!";
}

async function logOut() {
  const { error } = await supabase.auth.signOut();

  document.getElementById("message").textContent = error
    ? error.message
    : "Logged out successfully.";
}

// Event listeners - use either these OR the HTML onclick handlers, not both
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await logIn();
});

document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  await signUp();
});

console.log('Supabase initialized:', supabase !== undefined);
