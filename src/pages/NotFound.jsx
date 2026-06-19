import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-24 text-center bg-white">
      <h1 className="text-5xl font-bold text-primary-dark mb-4">404</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="rounded-xl bg-btn text-white font-bold px-8 py-3 hover:opacity-90 transition-opacity"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default NotFound;
