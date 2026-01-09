import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Example function
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User created successfully
  })
  .catch((error) => {
    console.error(error.message);
  });
