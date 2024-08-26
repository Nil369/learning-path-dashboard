import { Button } from "@/components/ui/button";

import { SignOutButton, UserButton,afterSignOutUrl} from "@clerk/nextjs";
import { useClerk } from '@clerk/nextjs'
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1 className="text-4xl text-sky-500 font-semibold">
        This is HOME PAGE
      </h1>
     {/* <SignOutButton afterSignOutUrl="/"/> */}
     <Link href="/dashboard">
     <Button variant="indigo">Dash-Board</Button>
     </Link>
    </div>
  );
}
