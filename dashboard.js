// Sign up
async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  console.log(user, error);
}

// Login
async function login(email, password) {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  console.log(user, error);
}

// Logout
async function logout() {
  const { error } = await supabase.auth.signOut();
  if (!error) alert("Logged out!");
}
