const footerSections = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Contact Us", "Services", "Gallery"],
    LinksId: ["home", "about-us", "contact-us", "services", "gallery" ]
  },
  {
    title: "Resources",
    links: ["Carrer", "Do Not Sell My Info", "Forum", "Support"],
  },
  {
    title: "Policy",
    links: ["Privacy", "Security"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-green-500 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Contact Section */}
        <div className="md:col-span-2 text-center md:text-left">
          <h3 className="uppercase font-bold text-lg mb-4">Contact Us</h3>

          <div className="space-y-4">
            {/* Phone */}
            <a
              href="tel:+918887684066"
              className="flex items-center gap-3 justify-center md:justify-start hover:underline"
            >
              <img src="/phone-call.png" alt="Phone" className="w-10" />
              <span>8887684066</span>
            </a>

            {/* Location */}
            <a
              href="https://www.google.com/maps/dir//ASHOKVATIKA+GREEN+SERVICES+Ashakhera,+Uttar+Pradesh+209859/@26.6318277,80.7242136,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x399c0990ed9077a3:0xa3bfd1df782cfe3f"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center md:justify-start hover:underline"
            >
              <img src="/circle.png" alt="Location" className="w-10" />
              <span>ASHOKVATIKA GREEN SERVICES,<br/> Ashakhera, Uttar Pradesh 209859</span>
            </a>

            {/* Email */}
            <a
              href="mailto:ashokvatika.green.services@gmail.com"
              className="flex items-center gap-3 justify-center md:justify-start hover:underline"
            >
              <img src="/gmail.png" alt="Email" className="w-10" />
              <span>
                ashokvatika.green.services
                <br />
                @gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        {footerSections.map((section, index) => (
          <div key={index} className="text-center md:text-left">
            <h3 className="uppercase font-bold text-lg mb-4">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href={`#${section.LinksId?.[i]}`} className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 mt-12 border-t border-green-400">
        <p className="text-sm">copyright © all rights reserved</p>
      </div>
    </footer>
  );
}
