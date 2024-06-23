import { Typography } from "@src/components/typography";

export default function NotFound() {
  return (
    <>
      <main className="grid h-full  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <Typography size={"h2"} weight={"black"} colors={"warning"}>
            404
          </Typography>
          <Typography size={"h1"} weight={"bold"}>
            Page not found
          </Typography>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
