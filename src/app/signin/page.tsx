import React from 'react';

const SignInPage = () => {
    return (
        <div className='flex justify-center'>
            <form>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

                    <label className="label">ইমেইল</label>
                    <input name="email" type="email" className="input" placeholder="Email" />

                    <label className="label">পাসওয়ার্ড</label>
                    <input name="password" type="password" className="input" placeholder="Password" />

                    <button className="btn btn-neutral text-white bg-red-800 mt-4">সাইন ইন করুন</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SignInPage;