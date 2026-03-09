import { socialLinkClass } from '../../constants/ui';

function FooterSection({ footer }) {
  return (
    <>
      <footer className="section-footer relative m-auto grid max-w-[1200px] grid-cols-[400px_repeat(3,minmax(0,1fr))] gap-8 px-8 py-20 max-[900px]:grid-cols-[1fr_200px] max-[600px]:grid-cols-[1fr_150px]">
        <span className="blur pointer-events-none absolute left-0 top-0 z-[-100] shadow-[0_0_1000px_50px_blue]" />
        <span className="blur pointer-events-none absolute right-0 top-32 z-[-100] shadow-[0_0_1000px_50px_blue]" />

        <div className="column">
          <div className="logo mb-8 max-w-[100px]">
            <img src={footer.logo} alt="Logo footer" className="flex w-full" />
          </div>
          <p className="mb-8 text-[#ccc]">{footer.message}</p>
          <div className="socials flex items-center gap-4">
            {footer.socialLinks.map((socialLink) => (
              <a href={socialLink.href} className={socialLinkClass} key={socialLink.href}>
                <i className={socialLink.iconClass} />
              </a>
            ))}
          </div>
        </div>

        {footer.columns.map((column) => (
          <div className="column" key={column.title}>
            <h4 className="mb-8 text-[1.2rem] font-medium text-white">{column.title}</h4>
            {column.links.map((link) => (
              <a
                href="#"
                className="mb-4 block text-[#ccc] transition-all duration-300 ease-in hover:text-[#1d4ed8]"
                key={`${column.title}-${link}`}
              >
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>

      <div className="copyright m-auto max-w-[1200px] p-4 text-center text-[0.8rem] text-white">
        {footer.copyright}
      </div>
    </>
  );
}

export default FooterSection;
