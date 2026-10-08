"use client"
import { authClient } from "@/lib/auth-client"
import Image from "next/image";

const UserInfo = () => {
    const { data: session, } = authClient.useSession()
    const user = session?.user;
    console.log(user);
    const handleSignout = async ()=>{
        await authClient.signOut();
    }

    return (

        <div className="ml-auto flex items-center">
  {user ? (
    <div className="flex items-center gap-3">
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

      <button
        className="btn btn-error btn-sm"
        onClick={handleSignout}
      >
        Sign Out
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-2">
      <button className="btn btn-ghost btn-sm">
        সাইন ইন
      </button>

      <button
        className="btn btn-error btn-sm"
        onClick={handleSignout}
      >
        সাইন আপ
      </button>
    </div>
  )}
</div>
    );
};

export default UserInfo;