import { ErrorMessage } from "@/components";

type InputProps = {
  type: string;
  placeholder: string;
  disabled?: boolean;
  value?: string;
  error?: string;
};

export default function Input({
  type,
  placeholder,
  value,
  disabled,
  error,
}: InputProps) {
  return (
    <>
      <label htmlFor={placeholder} className="text-sm font-semibold">
        {placeholder}
      </label>
      <input
        type={type}
        name={placeholder}
        placeholder={placeholder}
        className="p-2 border border-gray-300 rounded"
        value={value}
        disabled={disabled}
      />
      <ErrorMessage error={error} />
    </>
  );
}
