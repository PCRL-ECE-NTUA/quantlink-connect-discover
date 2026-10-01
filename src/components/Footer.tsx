import qrbitLogo from "@/assets/qrbit-wordmark.png";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl">
        <div>
          <a href="https://qrbit.gr" target="_blank" rel="noopener noreferrer" className="inline-block mb-3 hover:opacity-80 transition-opacity">
            <img src={qrbitLogo} alt="QRBIT" className="h-6 w-auto" />
          </a>
          <p className="font-sans text-sm text-muted-foreground">
            Lab: Photonics Communications Research Laboratory, NTUA, Athens, Greece
          </p>
          <a
            href="https://qrbit.gr/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-foreground font-medium hover:opacity-80 transition-opacity mt-2 inline-block"
          >
            Contact us →
          </a>
          <p className="font-sans text-sm text-muted-foreground mt-6">
            © {new Date().getFullYear()}{" "}
            <a href="https://qrbit.gr" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">QRBIT</a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
