import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeaderProps {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
}

const SectionHeader = ({ index, label, title, intro }: SectionHeaderProps) => (
  <Reveal className="sec-head">
    <div className="sec-label">
      <span className="sec-index">{index}</span>
      {label}
    </div>
    <h2 className="sec-title">{title}</h2>
    {intro && <p className="sec-intro">{intro}</p>}
  </Reveal>
);

export default SectionHeader;
