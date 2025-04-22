
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://mudplvaigphenzayycsl.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNjMxODEsImV4cCI6MjA2MDkzOTE4MX0.BQWNKTX1oqdoPlHjFIVik9hEi5BdsDYbHwvC19mbJxg";
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  document.getElementById("message").textContent = error
    ? error.message
    : "Signup successful! Check your email.";
}

async function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

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
