import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldPlus } from "lucide-react";
// import PricingModal from "./PricingModal";
// import UpdateEmailForm from "./AccountEmailInput";
import { UpdateUserNameForm } from "@/components";

import { type Account } from "@/lib/_types";

export default function AccountDetailsCard({ account }: { account: Account }) {
  return (
    <Card className="border-none flex flex-col justify-between gap-4 ">
      <CardHeader className="p-0">
        <CardTitle>Account Details</CardTitle>
      </CardHeader>

      <UpdateUserNameForm account={account} />
      {/* <UpdateEmailForm account={account} /> */}
      <div className="flex flex-col gap-4">
        <Label htmlFor="status" className="text-md flex items-center gap-2">
          Account status
        </Label>
        <div className="flex gap-4 flex-col">
          <Input
            id="phone"
            type="tel"
            name="phone"
            defaultValue={account?.status ? "Free" : "Premium"}
            disabled
          />
        </div>
      </div>
    </Card>
  );
}
