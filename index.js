// Initialize Supabase FIRST
const supabase = createClient(
  'https://mudplvaigphenzayycsl.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTM2MzE4MSwiZXhwIjoyMDYwOTM5MTgxfQ.69aRSlFopKOh9lFjPz8GZiiwCwwLzm8DapFpxSjpkAE'
);

// Check if Supabase initialized properly
console.log('Supabase initialized:', supabase ? 'Yes' : 'No');

// Auth functions
async function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("message").textContent = "Please fill in all fields";
    return;
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    document.getElementById("message").textContent = error
      ? error.message
      : "Signup successful! Check your email for confirmation.";
  } catch (error) {
    document.getElementById("message").textContent = "Signup failed: " + error.message;
  }
}

async function logIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email || !password) {
    document.getElementById("message").textContent = "Please fill in all fields";
    return;
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      document.getElementById("message").textContent = error.message;
    } else {
      document.getElementById("message").textContent = "Login successful!";
      // Redirect to dashboard or update UI
      window.location.href = "dashboard.html";
    }
  } catch (error) {
    document.getElementById("message").textContent = "Login failed: " + error.message;
  }
}

async function logOut() {
  try {
    const { error } = await supabase.auth.signOut();
    document.getElementById("message").textContent = error
      ? error.message
      : "Logged out successfully.";
  } catch (error) {
    document.getElementById("message").textContent = "Logout failed: " + error.message;
  }
}
