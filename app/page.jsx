import { Button } from "@/components/ui/button";
import { LayoutPanelLeft } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-5xl text-cyan-500 font-semibold mb-5">
        This is HOME PAGE
      </h1>
     {/* <SignOutButton afterSignOutUrl="/"/> */}
     <Link href="/dashboard">
     <Button size="lg" variant="indigo">
      <LayoutPanelLeft className=" h-4 w-4 mr-3"/>
      Dash Board
      </Button>
     </Link>
    </div>
  );
}
