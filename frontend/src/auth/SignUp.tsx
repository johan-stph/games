import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "./useAuthState";
import { Link } from "react-router";

const provider = new GoogleAuthProvider();

export default function SignUp() {
  const [user, loading, _] = useAuthState(auth, {});

  if (loading) {
    return <div>Loading</div>;
  }

  if (user) {
    console.log(user);
    return (
      <div>
        Hello {user.displayName ? user.displayName : user.email}
        <Link to={"/"}>Go back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{"marginBottom": 10}}>Please login with Google </div>
      <button onClick={handleGoogleLogin}>Login</button>
    </div>
  );
}

async function handleGoogleLogin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result)!;
      const token = credential.accessToken;
      console.log(token)
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      console.log(user);
      // ...
    })
    .catch((_) => {

      // ...
    });
}

