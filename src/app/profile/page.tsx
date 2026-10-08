'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import { useState } from 'react';


const Profile = () => {
    const { data: session, } = authClient.useSession()
    const user = session?.user;
    console.log(user);

    const [show, setShow] = useState(false)
    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const fromData = new FormData(e.target)
        const newuser = Object.fromEntries(fromData.entries()) as { email: string; image: string };
        console.log(user)
        await authClient.updateUser({
            ...newuser
        })
    }
    const handleEdit = () => {
        setShow(!show)
    }
    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="mx-auto mt-8 max-w-2xl">
                <div className="card border border-base-300 bg-base-100 shadow-sm">
                    <div className="card-body">

                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Profile
                                </h2>

                                <p className="mt-1 text-sm text-base-content/60">
                                    View and manage your profile information.
                                </p>
                            </div>

                            {!show && (
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={handleEdit}
                                >
                                    Edit Profile
                                </button>
                            )}
                        </div>

                        <div className="divider"></div>

                        {!show ? (
                            /* ================= PROFILE DETAILS ================= */
                            <div className="space-y-6">

                                {/* Profile Header */}
                                <div className="flex items-center gap-5 rounded-xl border border-base-300 bg-base-200 p-5">

                                    {/* Avatar */}
                                    <div className="avatar">
                                        <div className="w-20 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
                                            {user?.image ? (
                                                <Image
                                                    src={user.image}
                                                    alt={user.name || "Profile"}
                                                    width={80}
                                                    height={80}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-content">
                                                    {user?.name
                                                        ?.charAt(0)
                                                        .toUpperCase() || "U"}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Name & Email */}
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            {user?.name || "User"}
                                        </h3>

                                        <p className="text-sm text-base-content/60">
                                            {user?.email}
                                        </p>
                                    </div>
                                </div>

                                {/* Account Details */}
                                <div>
                                    <h3 className="mb-4 text-lg font-semibold">
                                        Account Information
                                    </h3>

                                    <div className="space-y-3">

                                        {/* Name */}
                                        <div className="flex items-center justify-between rounded-xl border border-base-300 p-4">
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                                                    Full Name
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    {user?.name || "Not provided"}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="flex items-center justify-between rounded-xl border border-base-300 p-4">
                                            <div>
                                                <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                                                    Email Address
                                                </p>

                                                <p className="mt-1 font-medium">
                                                    {user?.email || "Not provided"}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Image */}
                                        <div className="flex items-center justify-between rounded-xl border border-base-300 p-4">
                                            <div className="min-w-0">
                                                <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                                                    Profile Image
                                                </p>

                                                <p className="mt-1 truncate text-sm text-base-content/70">
                                                    {user?.image || "No image provided"}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        ) : (

                            /* ================= EDIT FORM ================= */
                            <form
                                onSubmit={handleUpdateProfile}
                                className="space-y-5"
                            >
                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Edit Profile
                                    </h3>

                                    <p className="mt-1 text-sm text-base-content/60">
                                        Update your profile information below.
                                    </p>
                                </div>

                                {/* Name */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium">
                                            Full Name
                                        </span>
                                    </label>

                                    <input
                                        name="name"
                                        type="text"
                                        defaultValue={user?.name ?? ""}
                                        className="input input-bordered w-full"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium">
                                            Email Address
                                        </span>
                                    </label>

                                    <input
                                        type="email"
                                        value={user?.email ?? ""}
                                        disabled
                                        className="input input-bordered w-full"
                                    />

                                    <p className="mt-1 text-xs text-base-content/50">
                                        Your email address cannot be changed.
                                    </p>
                                </div>

                                {/* Image */}
                                <div>
                                    <label className="label">
                                        <span className="label-text font-medium">
                                            Profile Image URL
                                        </span>
                                    </label>

                                    <input
                                        name="image"
                                        type="url"
                                        defaultValue={user?.image ?? ""}
                                        className="input input-bordered w-full"
                                        placeholder="https://example.com/image.jpg"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 pt-4">

                                    <button
                                        type="button"
                                        className="btn btn-ghost"
                                        onClick={() => setShow(false)}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Update Profile
                                    </button>

                                </div>
                            </form>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;