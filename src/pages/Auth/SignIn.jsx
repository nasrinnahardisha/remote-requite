import { Link } from "react-router";

const SignIn = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-24 bg-white">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-primary-dark mb-3">Sign In</h1>
        <p className="text-gray-600 mb-8">
          Welcome back. Sign in to manage your jobs and profile on RemoteRecruit.
        </p>
        <form
          className="space-y-4 text-left"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              required
              className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan"
              placeholder="you@example.com"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type="password"
              required
              className="mt-1 w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan"
              placeholder="••••••••"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-xl bg-btn text-white font-bold py-3 hover:opacity-90 transition-opacity"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-btn font-semibold hover:underline">
            Sign up
          </Link>
        </p>
        <Link
          to="/"
          className="inline-block mt-6 text-sm text-gray-500 hover:text-btn"
        >
          ← Back to home
        </Link>
      </div>
    </section>
  );
};

export default SignIn;
