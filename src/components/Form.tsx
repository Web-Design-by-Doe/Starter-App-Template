type FormProps = {
  action: (payload: FormData) => void;
  children: React.ReactNode;
};

export default function Form({ action, children }: FormProps) {
  return (
    <form
      className="flex flex-col gap-4 sm:mx-auto sm:w-full sm:max-w-sm"
      action={action}
    >
      {children}
    </form>
  );
}
