import { useState } from 'react';
import { CompanyFinancials, MergerAssumptions } from '../types';

interface ShareButtonProps {
  acquirer: CompanyFinancials;
  target: CompanyFinancials;
  assumptions: MergerAssumptions;
}

export function ShareButton({ acquirer, target, assumptions }: ShareButtonProps) {
  const [showCopied, setShowCopied] = useState(false);

  const generateShareURL = () => {
    const data = {
      acquirer,
      target,
      assumptions,
    };

    const encoded = btoa(JSON.stringify(data));
    const url = `${window.location.origin}${window.location.pathname}?scenario=${encoded}`;
    return url;
  };

  const handleShare = async () => {
    const url = generateShareURL();

    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers without clipboard API
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  return (
    <div className="share-button-container">
      <button onClick={handleShare} className="export-btn share-btn">
        {showCopied ? 'Link Copied!' : 'Share Scenario'}
      </button>
    </div>
  );
}
