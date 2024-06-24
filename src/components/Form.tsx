"use client";

type FormProps = {
  children: React.ReactNode;
  action: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function Form({ children, action }: FormProps) {
  return <form action={action}>{children}</form>;
}
