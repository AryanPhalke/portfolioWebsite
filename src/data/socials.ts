import { FaGithub, FaLinkedinIn, FaMedium } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import type { IconType } from 'react-icons';
import { profile } from './profile';

export interface Social {
  label: string;
  href: string;
  icon: IconType;
  handle: string;
}

/** Entries with an empty href (e.g. Medium until a URL is set) are hidden. */
export const socials: Social[] = [
  { label: 'GitHub', href: profile.links.github, icon: FaGithub, handle: 'AryanPhalke' },
  { label: 'LinkedIn', href: profile.links.linkedin, icon: FaLinkedinIn, handle: 'in/aryan-phalke' },
  { label: 'LeetCode', href: profile.links.leetcode, icon: SiLeetcode, handle: 'AryanPhalke' },
  { label: 'Medium', href: profile.links.medium, icon: FaMedium, handle: 'Articles' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FiMail, handle: profile.email },
].filter((s) => s.href);
