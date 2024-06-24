export default function Register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Register</h1>
      <form className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Register
        </button>
      </form>
    </main>
  );
}
