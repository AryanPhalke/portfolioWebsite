import { useEffect, useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

/** Copies `value` to the clipboard and confirms briefly. */
const CopyButton = ({ value, label }: { value: string; label: string }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      // Clipboard unavailable (insecure context or denied): the mailto link still works.
    }
  };

  return (
    <button type="button" className="btn btn-ghost copy-btn" onClick={copy}>
      {copied ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}
      <span aria-live="polite">{copied ? 'Copied' : label}</span>
    </button>
  );
};

export default CopyButton;
