"use client"
import { authClient } from "@/lib/auth-client"
import Image from "next/image";
import Link from "next/link";

const UserInfo = () => {
  const { data: session, } = authClient.useSession()
  const user = session?.user;
  console.log(user);
  const handleSignout = async () => {
    await authClient.signOut();
  }

  return (

  <div className="ml-auto flex items-center">
  {user ? (
    <div className="flex items-center gap-3">
      {/* Profile */}
      <Link
        href="/profile"
        className="flex items-center gap-3"
      >
        <div className="avatar">
          <div className="w-10 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-100">
            <Image
              src={user.image as string}
              alt={user.name}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        </div>

        <span className="font-medium">
          {user.name}
        </span>
      </Link>

      {/* Sign Out */}
      <button
        className="btn btn-error btn-sm"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <Link
        href="/signin"
        className="btn btn-ghost btn-sm"
      >
        সাইন ইন
      </Link>

      <Link
        href="/signup"
        className="btn btn-error btn-sm"
      >
        সাইন আপ
      </Link>
    </div>
  )}
</div>
  );
};

export default UserInfo;