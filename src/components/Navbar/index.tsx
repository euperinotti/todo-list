import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const route = location.pathname

  return (
    <nav className="text-slate-500 flex gap-4 items-center justify-center">
      <a href="/" className={"hover:text-sky-500 " + (route == "/" ? "text-sky-500" : "")}>
        Home
      </a>
      <a href="/about" className={"hover:text-sky-500 " + (route == "/about" ? "text-sky-500" : "")}>
        About
      </a>
      <a href="/todo" className="p-2 bg-sky-600 text-slate-100 rounded">
        Todo App
      </a>
    </nav>
  );
};
