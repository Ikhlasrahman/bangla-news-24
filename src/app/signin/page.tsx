'use client'

import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const SignInPage = () => {
    const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries()) as { email: string; password: string };
        const { data, error } = await authClient.signIn.email({
            ...user,
            callbackURL: "/",
        });

        console.log(user)

        if (data) {
            toast.success('Sign In Successfully')
        }

        if (error) {
            toast.error(error.message as string);
        }
    };

    const handleGoogleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(data);
    }
    const handleGitHubSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }
    return (
        <div className='flex justify-center '>
            <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral text-white bg-red-800 mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>


            <button className="btn btn-accent" onClick={handleGoogleSignIn}>Sign In With Google</button>

            <button className="btn btn-accent" onClick={handleGitHubSignIn}>Sign In With Github</button>

        </div>
    );
};

export default SignInPage;