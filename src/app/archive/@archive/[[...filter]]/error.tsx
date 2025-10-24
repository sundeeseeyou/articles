"use client";

export default function ArchiveError({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-2">
        We encountered an error while trying to load the archive.
      </p>
      <p className="text-red-500">{error.message}</p>
    </div>
  );
}
