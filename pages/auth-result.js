import { useSession } from 'next-auth/react'

export default function AuthResult() {
    const session = useSession()

    console.log("session: ", session);
    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <h1>Auth Result</h1>
        </div>
    )
} 