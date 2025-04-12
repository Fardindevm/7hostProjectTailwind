// components/SocialIcons.jsx
import { Instagram, Facebook, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Instagram, url: "http://instagram.com/SevenHost24" },
  { icon: Twitter, url: "https://twitter.com/SevenHost24" },
  { icon: Facebook, url: "https://www.facebook.com/SevenHost24" },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-[#08C0563D] hover:bg-[#08C0564D] transition-colors duration-200"
          aria-label={`Link to ${Icon.displayName}`}
        >
          <Icon className="text-[#08C056] w-6 h-6" />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;