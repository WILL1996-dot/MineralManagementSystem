// Initialize Supabase
const supabaseUrl = 'https://mudplvaigphenzayycsl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTM2MzE4MSwiZXhwIjoyMDYwOTM5MTgxfQ.69aRSlFopKOh9lFjPz8GZiiwCwwLzm8DapFpxSjpkAE';
const supabase = createClient(supabaseUrl, supabaseKey);

// Auth functions
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    document.getElementById("message").textContent = error
      ? error.message
      : "Signup successful! Check your email.";
  } catch (error) {
    document.getElementById("message").textContent = error.message;
  }
}

async function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    document.getElementById("message").textContent = error
      ? error.message
      : "Login successful!";
      
    if (data?.user) {
      // Redirect or update UI after successful login
      window.location.href = 'dashboard.html'; // Example redirect
    }
  } catch (error) {
    document.getElementById("message").textContent = error.message;
  }
}

async function logOut() {
  try {
    const { error } = await supabase.auth.signOut();
    document.getElementById("message").textContent = error
      ? error.message
      : "Logged out successfully.";
      
    // Clear form fields on logout
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
  } catch (error) {
    document.getElementById("message").textContent = error.message;
  }
}

// Check auth state on page load
supabase.auth.onAuthStateChange((event, session) => {
  console.log('Auth state changed:', event);
  if (event === 'SIGNED_IN') {
    document.getElementById("message").textContent = "Welcome back!";
  }
});
