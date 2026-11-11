import { socials } from '../../data/socials';

const SocialLinks = ({ className = '' }: { className?: string }) => (
  <ul className={`social-links ${className}`}>
    {socials.map(({ label, href, icon: Icon }) => (
      <li key={label}>
        <a
          href={href}
          aria-label={label}
          title={label}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon aria-hidden />
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
