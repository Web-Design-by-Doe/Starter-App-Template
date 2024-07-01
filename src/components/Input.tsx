import { Input as ShadCnInput } from "./ui/input";
import ErrorMessage from "./ErrorMessage";
import { Label } from "./ui/label";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  error?: string;
  hidden?: boolean;
  value?: string | undefined;
  readOnly?: boolean;
};

export default function Input({
  type,
  name,
  placeholder,
  error,
  hidden = false,
  value = undefined,
  readOnly = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <Label className="cursor-pointer text-md" htmlFor={name}>
        {placeholder}
      </Label>
      <ShadCnInput
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        hidden={hidden}
        value={value}
        readOnly={readOnly}
      />
      {error && <ErrorMessage error={error} />}
    </div>
  );
}
