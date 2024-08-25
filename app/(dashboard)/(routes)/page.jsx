import { Button } from "@/components/ui/button";

import { SignOutButton, UserButton,afterSignOutUrl} from "@clerk/nextjs";
import { useClerk } from '@clerk/nextjs'
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      <h1 className="text-4xl text-sky-500 font-semibold">
        This is a PROTECTED PAGE
      </h1>
     {/* <SignOutButton afterSignOutUrl="/"/> */}
     <Button variant="indigo">Click Me</Button>
    </div>
  );
}
