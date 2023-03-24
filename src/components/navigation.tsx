import Link from "next/link";

function Navigation() {
  return (
    <nav className="mb-5">
      <ul className="flex bg-black text-white gap-5 p-2 justify-center text-center shadow-xl">
        <MenuItem href="/" className="text-red-800">
          home
        </MenuItem>
        <MenuItem href="/pokemon">Pokemon</MenuItem>
        <MenuItem href="/another-2">another 2</MenuItem>
        <MenuItem href="/another-3">another 3</MenuItem>

        {/* <li>
          <Link href="/" className="hover:text-blue-500">
            home
          </Link>
        </li>
        <li>
          <Link href="/another-1" className="hover:text-blue-500">
            another page
          </Link>
        </li>
        <li>
          <Link href="/another-2" className="hover:text-blue-500">
            aNoThEr pAge 2
          </Link>
        </li>
        <li>
          <Link href="/another-3" className="hover:text-blue-500">
            AnOtHeR PaGe 3
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
export { Navigation };

const MenuItem = ({ href, children, className }) => {
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-blue-600 ${className ? className : ""}`}
      >
        {children}
      </Link>
    </li>
  );
};
