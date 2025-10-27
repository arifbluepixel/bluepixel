import Link from "next/link";

export default function NotFound() {
  return (
    <section className="">
      <div className="pt-20 pb-16 min-h-screen bg-gradient-to-r from-emerald-800 to-black text-emerald-300 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-9xl font-extrabold text-white">404</h1>
        <h2 className="text-2xl font-semibold">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </h2>
        <Link href="/">
          <span className="px-6 py-3 bg-emerald-600 text-white text-lg font-medium rounded-lg hover:bg-emerald-700 transition duration-300">
            Go to Homepage
          </span>
        </Link>
        <div className="mt-12"></div>
      </div>
    </section>
  );
}
