import { Link } from "react-router-dom";
import useIsMobile from "../utils/useIsMobile";
import { Menu } from "lucide-react";

export default function Header() {
  const isMobile = useIsMobile();
  return (
    <header className="flex justify-center p-6  bg-white z-10 border-b border-gray-200 z-50 relative shadow-xl shadow-slate-900/15">
      <div className="flex justify-between items-center w-[1200px]">
        {" "}
        <Link to="/">
          <h1 className="instrument-serif-regular text-4xl">viewpooort</h1>
        </Link>
        {isMobile ? (
          <Menu />
        ) : (
          <nav>
            <ul className="flex gap-4 text-sm">
              <li>
                <Link to="/projekte">Projekte</Link>
              </li>
              <li>
                <Link to="/leistungen">Leistungen</Link>
              </li>
              <li>Kontakt</li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
