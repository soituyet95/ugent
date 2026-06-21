import Link from "next/link";

export function Header() {
  return (
    <header className="cug-header">
      <div className="cug-header-inner">
        <Link className="cug-header-brand" href="/">
          Ugent
        </Link>
        <nav className="cug-header-nav">
          <Link className="cug-header-link" href="/">
            Dashboard
          </Link>
          <Link className="cug-header-link" href="/flows">
            Flows
          </Link>
          <Link className="cug-header-link" href="/settings">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  );
}
