import PageNotFound from "@/components/PageNotFound";

export default function NotFound() {
  return (
    <PageNotFound
      message="This page could not be found."
      buttonText="Go home"
      buttonUrl="/"
    />
  );
}
