import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "./useAuthState";
import { Link } from "react-router";


const provider = new GoogleAuthProvider()

export default function SignUp() {
  const [user, loading, error] = useAuthState(auth, {});

  if (loading) {
    return <div>Loading</div>
  }

  if (user) {
    console.log(user)
    return <div>
      Hello {user.displayName ? user.displayName : user.email}
      
      <Link to={"/"}>Go back to home</Link>
    </div>
  }

  return (
    <div>
      This is the SignUp Component
      <button onClick={handleSignUp}>Register</button>
      <button onClick={handleGoogleLogin}>Google Register</button>
    </div>
  );
}

async function handleGoogleLogin() {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)!;
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    
}

async function handleSignUp() {
  const initialValues = {
    firstName: "johannes",
    lastName: "stephan",
    email: "johannes.uni.kit@gmail.com",
    password: "12345678",
    confirmPassword: "12345678",
  };

  const onSubmitSignupForm = async (values: any) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ..
      });
  };
  await onSubmitSignupForm(initialValues);
}
