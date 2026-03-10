import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link to="/" className="font-mono text-2xl font-bold text-foreground mb-12 block">
          QuantLink
        </Link>
        <h1 className="font-mono text-xl font-semibold text-foreground mb-2">
          Access Platform
        </h1>
        <p className="font-sans text-sm text-muted-foreground mb-8">
          Log in or create an account to continue.
        </p>

        <div className="space-y-4">
          <div>
            <label className="font-mono text-xs text-muted-foreground block mb-1.5">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-border bg-background text-foreground font-sans text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="researcher@institution.edu"
            />
          </div>
          <div>
            <label className="font-mono text-xs text-muted-foreground block mb-1.5">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-border bg-background text-foreground font-sans text-sm px-4 py-3 focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full bg-primary text-primary-foreground font-mono text-sm font-semibold px-8 py-3 hover:opacity-90 transition-opacity">
            Log In
          </button>
          <p className="font-sans text-sm text-muted-foreground text-center">
            Don't have an account?{" "}
            <span className="text-primary font-medium cursor-pointer hover:opacity-80">
              Register
            </span>
          </p>
        </div>

        <Link
          to="/"
          className="font-sans text-sm text-muted-foreground mt-12 block hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};

export default Login;
