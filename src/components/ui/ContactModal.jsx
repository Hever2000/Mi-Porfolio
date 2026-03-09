function ContactModal({ isOpen, contactData, onClose }) {
  if (!isOpen) {
    return null;
  }

  const handleCloseOnKeyboard = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClose();
    }
  };

  return (
    <>
      <div
        className="form-container fixed left-1/2 top-1/2 z-[9999] flex max-h-[50rem] min-h-[50rem] min-w-[50rem] max-w-[50rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 rounded-2xl border-2 border-transparent text-white max-[900px]:max-h-[90vh] max-[900px]:max-w-[92vw] max-[900px]:min-h-fit max-[900px]:min-w-[92vw]"
        id="form"
        style={{
          background:
            'linear-gradient(#212121, #212121) padding-box, linear-gradient(145deg, transparent 35%, blue, #40c9ff) border-box',
        }}
      >
        <form
          className="form relative mx-[5%] my-[15%] flex flex-col justify-center max-[900px]:my-[8%]"
          action={contactData.formAction}
          method="POST"
        >
          <span className="mb-8 text-2xl font-semibold text-[#717171]">
            <i className="ri-phone-fill" /> : +54 1164671992
          </span>
          <div className="form-group flex min-h-max min-w-max flex-col gap-4">
            <label htmlFor="email" className="text-2xl font-semibold text-[#717171]">
              Tu email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mb-4 w-full rounded-lg border border-[#414141] bg-transparent px-4 py-3 text-white outline-none placeholder:opacity-50 focus:border-[#40c9ff]"
            />
          </div>
          <div className="form-group flex min-h-max min-w-max flex-col gap-4">
            <label htmlFor="textarea" className="text-2xl font-semibold text-[#717171]">
              Como podemos ayudarte?
            </label>
            <textarea
              name="textarea"
              id="textarea"
              rows="10"
              cols="50"
              required
              className="mb-8 h-1/2 max-w-full resize-none rounded-lg border border-[#414141] bg-transparent px-4 py-3 text-white outline-none focus:border-[#40c9ff]"
            />
          </div>
          <button
            className="form-submit-btn flex h-4 w-16 items-center justify-center self-start rounded-[15px] border-2 border-blue-600 bg-transparent p-6 text-base font-semibold text-white hover:bg-blue-600 hover:duration-[400ms] active:scale-95"
            type="submit"
          >
            ENVIAR
          </button>
          <span
            id="closeBtn"
            className="close absolute right-2 top-2 mx-4 cursor-pointer text-[2rem] text-white hover:text-red-600"
            onClick={onClose}
            onKeyDown={handleCloseOnKeyboard}
            role="button"
            tabIndex={0}
          >
            <i className="ri-close-fill" />
          </span>
        </form>
      </div>

      <span
        className="overlay fixed left-0 top-0 z-[1000] h-full w-full bg-[#000a]"
        id="overlay"
        onClick={onClose}
        onKeyDown={handleCloseOnKeyboard}
        role="button"
        tabIndex={0}
      />
    </>
  );
}

export default ContactModal;
