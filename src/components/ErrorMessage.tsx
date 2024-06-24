export default function ErrorMessage({ error }: { error: string | undefined }) {
  return <p className="text-red-500 text-sm">{error}</p>;
}
