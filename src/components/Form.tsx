"use client";

type FormProps = {
  children: React.ReactNode;
  action: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

//! Add the correct type for action

export default function Form({ children, action }: FormProps) {
  return <form action={action}>{children}</form>;
}
