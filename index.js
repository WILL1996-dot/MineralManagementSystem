// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Supabase with your credentials
  window.supabase = supabase.createClient(
    'https://mudplvaigphenzayycsl.supabase.co',
    'EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11ZHBsdmFpZ3BoZW56YXl5Y3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNjMxODEsImV4cCI6MjA2MDkzOTE4MX0.BQWNKTX1oqdoPlHjFIVik9hEi5BdsDYbHwvC19mbJxg'
  );

  // Verify initialization
  console.log("Supabase client:", window.supabase);
  console.log('Supabase initialized:', window.supabase ? 'Success' : 'Failed');
  
  // Add event listeners
  document.getElementById('signup-btn').addEventListener('click', signUp);
  document.getElementById('login-btn').addEventListener('click', logIn);
  document.getElementById('logout-btn').addEventListener('click', logOut);

  // Auth functions
  async function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
      document.getElementById("message").textContent = "Please fill in all fields";
      return;
    }

    try {
      const { data, error } = await window.supabase.auth.signUp({
        email,
        password,
      });

      document.getElementById("message").textContent = error
        ? error.message
        : "Signup successful! Check your email for confirmation.";
    } catch (error) {
      document.getElementById("message").textContent = "Signup failed: " + error.message;
      console.error("Signup error:", error);
    }
  }

  async function logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const { data, error } = await window.supabase.auth.signInWithPassword({
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
      console.error("Login error:", error);
    }
  }

  async function logOut() {
    try {
      const { error } = await window.supabase.auth.signOut();
      document.getElementById("message").textContent = error
        ? error.message
        : "Logged out successfully.";
    } catch (error) {
      document.getElementById("message").textContent = "Logout failed: " + error.message;
      console.error("Logout error:", error);
    }
  }
});
