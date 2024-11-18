export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen items-center justify-center bg-red-500">
      <div className="size-24 animate-spin rounded-full border-b-2 border-t-2 border-primary"></div>
    </div>
  );
}
