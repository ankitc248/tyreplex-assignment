export default function Footer() {
  return (
    <footer className="rounded-t bg-white shadow overflow-hidden">
      <div className="flex justify-between flex-wrap p-4 items-start gap-4">
        <div className="flex flex-col gap-2 order-2 sm:order-1 w-full md:w-auto">
          <span className="text-sm">Have a question about Tyres?</span>
          <span className="text-xs text-neutral-400">
            Get an answer in 24 hours from our experts.
          </span>
          <div className="flex gap-2 w-full">
            <input
              type="text"
              placeholder="Ask anything related to tires"
              className="w-full md:w-96 bg-white rounded border p-2 text-sm focus:outline focus:outline-accent/50"
            />
            <button
              type="button"
              className="text-xs font-medium bg-accent text-white rounded p-2 px-3"
            >
              Send
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 order-1 sm:order-2">
          <img
            src="/assets/images/TP-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 w-full text-xs text-neutral-500 border-t p-4 gap-4">
        <div className="flex gap-2 flex-col items-start">
          <span className="text-neutral-950 font-medium text-xs">Socials</span>
          <div className="flex gap-2">
            <a href="#">
              <img
                src="/assets/svg-icons/facebook.svg"
                className="contrast-50"
                alt="facebook"
                width={24}
              />
            </a>
            <a href="#">
              <img
                src="/assets/svg-icons/instagram.svg"
                className="contrast-50"
                alt="instagram"
                width={24}
              />
            </a>
          </div>
        </div>
        <div className="flex gap-2 flex-col items-start md:items-end">
          <span className="text-neutral-950 font-medium">Questions</span>
          <a href="#">Who we are?</a>
          <a href="#">Are you a Tire Dealer?</a>
        </div>
        <div className="flex gap-2 flex-col items-start md:items-end">
          <span className="text-neutral-950 font-medium">Legal</span>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Shipping & Return Policy</a>
        </div>
        <div className="flex gap-2 flex-col items-start md:items-end">
          <span className="text-neutral-950 font-medium">Connect</span>
          <a href="#">Contact Us</a>
          <a href="#">Career</a>
        </div>
      </div>
    </footer>
  );
}
