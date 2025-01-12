import {useEffect, useState} from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export function UserPage({user}) {
    const [isLoading, setLoading] = useState<boolean>(true);
    const [email, setEmail] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const emailFromBackend = await fetchUserDataFromBackend(user.accessToken);
            setEmail(emailFromBackend);
            setLoading(false);
        };
        fetchData();
    }, [user.accessToken]); // Depend on the user's access token

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <span>This is the user-page</span>
            <br/>
            <span>you are currently logged in: {email}</span>
        </div>
    );
}


//use loading
async function fetchUserDataFromBackend(token: string) {
    const backendURL = "http://localhost:8080/user/email";
    const response = await fetch(backendURL, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    return await response.text();

}