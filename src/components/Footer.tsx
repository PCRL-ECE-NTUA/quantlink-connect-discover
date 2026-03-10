const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-16 lg:px-24 py-12">
      <div className="max-w-5xl flex flex-col md:flex-row justify-between gap-8">
        <div>
          <p className="font-mono text-sm font-semibold text-foreground mb-2">QRBIT</p>
          <p className="font-sans text-sm text-muted-foreground">
            Central Offices: Damokleous 1, 12313, Peristeri, Athens
          </p>
          <p className="font-sans text-sm text-muted-foreground">
            Lab: Photonics Communications Research Laboratory, NTUA, Athens, Greece
          </p>
        </div>
        <div className="font-sans text-sm text-muted-foreground">
          © {new Date().getFullYear()} QRBIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
