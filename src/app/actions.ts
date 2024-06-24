export default async function login({ formData }: { formData: FormData }) {
  try {
    console.log("Logging in with", formData);
  } catch (error) {
    return console.error(error);
  }
}
