import { useState } from "react";

export default function Login() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const login = (event) => {
        event.preventDefault();
        console.log(password);
        if(!password) {
            setError(true);
        } else {
            setError(false);
        }
    }

    return (
        <section className="container">
            <form className="border border-sky-400/40 px-7 py-10 rounded max-w-[500px] mx-auto mt-10" onSubmit={login}>
                <div className="mb-8">
                    <p className="text-sky-500">Login to your account.</p>
                    <h1 className="text-5xl font-bold text-white my-2">
                        Welcome Irtiza.
                    </h1>
                    <p className="text-2xl">It is nice to see you again.</p>
                </div>

                <div className="mb-10">
                    <label htmlFor="password">Enter your password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="your password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                        className="w-full block p-3 rounded bg-transparent text-sky-400 border-2 border-sky-400/50 focus:border-sky-400 outline-none my-2"
                    />
                    {error ? <label className="text-red-400">Please enter password</label>: null}
                </div>

                <button type="submit" className="flex items-center justify-center gap-4 font-bold text-300 text-sky-400 border-2 border-sky-400 px-8 py-3 rounded hover:bg-sky-300/10">
                    Login
                </button>
            </form>
        </section>
    );
}
