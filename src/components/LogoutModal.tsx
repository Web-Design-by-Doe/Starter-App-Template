import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
  DialogClose,
} from "@/components/ui/dialog";

import { LogoutButton } from "@/components";

export default function LogoutModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-md font-semibold w-full" variant="destructive">
          Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-8 px-6 py-10">
        <DialogHeader className="flex flex-col gap-1 px-10">
          <DialogTitle className="text-3xl">
            Are you sure you want to logout?
          </DialogTitle>
          <DialogDescription className="text-md">
            You can always log back in to your account later.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LogoutButton />
          <DialogClose>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
