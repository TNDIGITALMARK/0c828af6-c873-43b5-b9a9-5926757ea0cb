import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary">INSTANTLY</div>
            <p className="text-muted-foreground text-sm">
              Live streaming, local delivery, and community services in one powerful platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-muted-foreground hover:text-primary transition-colors">
                  Become a Provider
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Download App</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.createcommunity.instantlyofficial&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Google Play
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/instantly-community/id6747051652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <p className="text-muted-foreground text-sm">
              <a href="mailto:instantlyceo@gmail.com" className="hover:text-primary transition-colors">
                instantlyceo@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Instantly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
