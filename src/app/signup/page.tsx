'use client'

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
    const router = useRouter();
    const HandleSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const user = Object.fromEntries(formData.entries()) as { name: string, email: string, image: string, password: string }
        console.log(user);

        const { data, error } = await authClient.signUp.email({ ...user, callbackURL: "/" })

        if (data) {
            console.log(data);
            router.push("/");

        }

        if (error) {
            console.log(error)
        }

    }
    return (
        <div className='flex justify-center'>
            <form onSubmit={HandleSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">নাম</label>
                    <input name="name" type="text" className="input" placeholder="Name" />

                    <label className="label">ImageURL</label>
                    <input name="image" type="url" className="input" placeholder="ImageURL" />

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <button type="submit" className="btn btn-neutral text-white bg-red-800 mt-4">সাইন আপ করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignUpPage;