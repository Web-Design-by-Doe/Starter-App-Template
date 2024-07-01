import ErrorMessage from "./ErrorMessage";

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
    <>
      <label
        className="block text-sm font-medium leading-6 text-gray-900"
        htmlFor={name}
      >
        {placeholder}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        hidden={hidden}
        value={value}
        readOnly={readOnly}
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      {error && <ErrorMessage error={error} />}
    </>
  );
}
