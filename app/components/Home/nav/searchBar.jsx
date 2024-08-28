import {
  Command,
  CommandInput,
  CommandList,
} from "@/components/ui/command";

export function Search() {
  return (
    <div>
      <Command className="bg-blue-50 mr-5 text-black rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput placeholder="Search for anything..." />
        <CommandList>
          
        </CommandList>
      </Command>
    </div>
  );
}
