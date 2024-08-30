const FooterQuestionSection = () => {
  return (
    <div className="flex flex-col gap-1 order-2 sm:order-1 w-full md:w-auto">
      <span className="text">Have a question about Tyres?</span>
      <span className="text-xs text-neutral-500">
        Get an answer in 24 hours from our experts.
      </span>
      <div className="flex gap-2 w-full mt-2">
        <input
          type="text"
          placeholder="Ask anything related to tires..."
          className="w-full md:w-96 bg-white rounded border border-neutral-300 p-2 text-sm shadow-inner focus-visible:outline-none"
        />
        <button
          type="button"
          className="text-xs font-medium bg-accent text-white rounded shadow p-2 px-3 hover:bg-neutral-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const FooterLogo = () => {
  return (
    <div className="flex flex-col items-end gap-2 order-1 sm:order-2">
      <img
        loading="lazy"
        src="/assets/images/TP-logo.png"
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-2 flex-col items-start">
      <span className="text-neutral-950 font-medium text-xs">Socials</span>
      <div className="flex gap-2">
        <a href="#">
          <img
            loading="lazy"
            src="/assets/svg-icons/facebook.svg"
            className="contrast-50"
            alt="facebook"
            width={24}
          />
        </a>
        <a href="#">
          <img
            loading="lazy"
            src="/assets/svg-icons/instagram.svg"
            className="contrast-50"
            alt="instagram"
            width={24}
          />
        </a>
      </div>
    </div>
  );
};

const LinkColumn = ({ title, links }) => {
  return (
    <div className="flex gap-2 flex-col items-start md:items-end">
      <span className="text-neutral-950 font-medium">{title}</span>
      {links.map((link, index) => (
        <a key={index} href="#">
          {link}
        </a>
      ))}
    </div>
  );
};

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full text-xs text-neutral-500 border-t p-4 gap-4">
      <SocialLinks />
      <LinkColumn
        title="Questions"
        links={["Who we are?", "Are you a Tire Dealer?"]}
      />
      <LinkColumn
        title="Legal"
        links={["Privacy Policy", "Terms of Use", "Shipping & Return Policy"]}
      />
      <LinkColumn title="Connect" links={["Contact Us", "Career"]} />
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="rounded-t bg-white shadow overflow-hidden border-t sm:border-0">
      <div className="flex justify-between flex-wrap p-4 items-start gap-4">
        <FooterQuestionSection />
        <FooterLogo />
      </div>
      <FooterLinks />
      <div className="text-xs text-center p-4 border-t text-neutral-500">
        ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
