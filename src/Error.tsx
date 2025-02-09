function Error({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="p-4 text-center">
        <h1 className="mb-4 text-6xl font-extrabold">Oops!</h1>
        <p className="mb-4 text-2xl">Something went wrong.</p>
        <p className="mb-8">{error.message}</p>
        <button onClick={resetErrorBoundary} className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white shadow-lg hover:bg-blue-700 focus:outline-none">
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Error;
