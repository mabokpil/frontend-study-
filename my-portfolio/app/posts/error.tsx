"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <h2 className="text-2xl font-bold mb-4">문제가 발생했어요 😢</h2>
      <p className="text-gray-500 mb-8">{error.message}</p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        다시 시도
      </button>
    </div>
  );
}
