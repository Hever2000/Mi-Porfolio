function SectionTitle({ text, iconClass }) {
  return (
    <h2 className="header-skills text-center text-4xl font-semibold text-white">
      {iconClass ? (
        <span>
          <i className={iconClass} />
        </span>
      ) : null}{' '}
      {text}
    </h2>
  );
}

export default SectionTitle;
