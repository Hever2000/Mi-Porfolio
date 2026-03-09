import { baseButtonClass, navLinkClass } from '../../constants/ui';

function Navbar({
  navItems,
  logo,
  isMenuOpen,
  onOpenMenu,
  onCloseMenu,
  onNavClick,
  onToggleContact,
}) {
  return (
    <nav className="sticky top-0 z-[1000] m-auto flex w-full flex-wrap items-center justify-around gap-8 bg-[#18181b] p-[15px] shadow-[0_0_20px_0_black]">
      <div className="max-w-[110px]">
        <a href="#inicio" aria-label="Ir al inicio" onClick={(event) => onNavClick(event, 'inicio')}>
          <img src={logo} alt="Logo" className="flex w-full" />
        </a>
      </div>

      <button
        className={`${baseButtonClass} hidden min-w-[70px] max-[800px]:block max-[800px]:max-w-[100px] max-[800px]:border-none max-[800px]:text-[28px] max-[800px]:font-light`}
        id="abrir"
        aria-label="Abrir menu"
        type="button"
        onClick={onOpenMenu}
      >
        <i className="ri-menu-fill" />
      </button>

      <ul
        className={`inicio list-none items-center gap-12 min-[801px]:relative min-[801px]:flex min-[801px]:opacity-100 min-[801px]:visible ${
          isMenuOpen
            ? 'max-[800px]:visible max-[800px]:fixed max-[800px]:right-0 max-[800px]:top-0 max-[800px]:z-[9999] max-[800px]:flex max-[800px]:min-h-full max-[800px]:flex-col max-[800px]:items-end max-[800px]:gap-8 max-[800px]:bg-[#18181b] max-[800px]:px-8 max-[800px]:pb-[100rem] max-[800px]:pt-8 max-[800px]:opacity-100 max-[800px]:shadow-[0_0_0_100vmax_#000a]'
            : 'max-[800px]:invisible max-[800px]:absolute max-[800px]:opacity-0'
        }`}
        id="lista"
      >
        {navItems.map((item) => (
          <li className="link" key={item.id}>
            <a
              href={`#${item.id}`}
              className={navLinkClass}
              onClick={(event) => onNavClick(event, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}

        <button
          className={`${baseButtonClass} hidden max-[800px]:mt-10 max-[800px]:block max-[800px]:max-w-[200px] max-[800px]:border-none max-[800px]:text-[28px] max-[800px]:font-light`}
          id="cerrar"
          aria-label="Cerrar menu"
          type="button"
          onClick={onCloseMenu}
        >
          <i className="ri-close-fill" />
        </button>
      </ul>

      <button
        className={`${baseButtonClass} h-[50px] w-[4rem] min-w-[4rem]`}
        id="contactame"
        type="button"
        onClick={onToggleContact}
      >
        Contacto
      </button>
    </nav>
  );
}

export default Navbar;
