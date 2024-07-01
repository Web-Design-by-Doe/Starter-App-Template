import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { AccountDetailsCard, LogoutButton } from "@/components";

// import { firstCharToUppercase } from "@/utils/firstCharToUppercase";
import { type Account } from "@/lib/_types";
import LogoutModal from "./LogoutModal";

export default function AccountSheet({ account }: { account: Account }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Avatar>
            <AvatarFallback>
              {account?.name.charAt(0).toLocaleUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-10 overflow-auto">
        <SheetHeader className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Avatar className="w-16 h-16">
              <AvatarFallback className="text-xl">
                {account?.name.charAt(0).toLocaleUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-2 text-start">
              <SheetTitle className="font-semibold text-2xl">
                Hello {account?.name}
              </SheetTitle>
              <SheetDescription>
                Edit and manage your account settings
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <AccountDetailsCard account={account} />
        <SheetFooter className="mt-auto">
          <LogoutModal />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
