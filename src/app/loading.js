export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <h5 className="mt-3 text-blue-500">Loading...</h5>
      </div>
    </div>
  );
}
