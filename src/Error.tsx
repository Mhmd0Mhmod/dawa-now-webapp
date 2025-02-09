function Error({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center p-4">
        <h1 className="text-6xl font-extrabold mb-4">Oops!</h1>
        <p className="text-2xl mb-4">Something went wrong.</p>
        <p className="mb-8">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg focus:outline-none"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Error;
