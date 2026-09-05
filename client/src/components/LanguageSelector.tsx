// src/components/LanguageSelector.tsx

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { 
  languages, 
  getStoredLanguage, 
  getLanguageInfo, 
  loadGoogleTranslate, 
  switchLanguage,
  setStoredLanguage
} from '@/utils/googleTranslate';

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = getStoredLanguage();
    return getLanguageInfo(saved) || languages[0];
  });
  const [isLoading, setIsLoading] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    loadGoogleTranslate().catch(err => {
      console.warn('Google Translate initialization:', err);
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleLanguageSelect = useCallback(async (langCode: string) => {
    setIsLoading(true);
    setIsOpen(false);

    const langInfo = getLanguageInfo(langCode);
    if (langInfo) {
      setCurrentLang(langInfo);
      setStoredLanguage(langCode);
      
      try {
        await loadGoogleTranslate();
        await switchLanguage(langCode);
      } catch (err) {
        console.warn('Language switch error:', err);
      }
    }

    setIsLoading(false);
  }, []);

  // Inline styles
  const wrapperStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    background: 'transparent',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    color: 'inherit',
    cursor: isLoading ? 'not-allowed' : 'pointer',
    fontSize: '13px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
    minHeight: '36px',
    opacity: isLoading ? 0.6 : 1,
  };

  const globeStyle: React.CSSProperties = {
    opacity: 0.7,
  };

  const flagStyle: React.CSSProperties = {
    fontSize: '16px',
    lineHeight: 1,
  };

  const codeStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.5px',
    opacity: 0.8,
  };

  const chevronStyle: React.CSSProperties = {
    transition: 'transform 0.3s ease',
    opacity: 0.6,
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  const dropdownStyle: React.CSSProperties = {
    position: window.innerWidth <= 768 ? 'fixed' : 'absolute',
    top: window.innerWidth <= 768 ? 'auto' : 'calc(100% + 8px)',
    bottom: window.innerWidth <= 768 ? 'calc(100% + 8px)' : 'auto',
    right: window.innerWidth <= 768 ? '16px' : '0',
    left: window.innerWidth <= 768 ? '16px' : 'auto',
    zIndex: 1001,
    minWidth: window.innerWidth <= 768 ? 'unset' : '220px',
    maxWidth: window.innerWidth <= 768 ? '320px' : 'none',
    maxHeight: window.innerWidth <= 768 ? '300px' : '400px',
    overflowY: 'auto',
    background: 'rgba(20, 20, 30, 0.92)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
    padding: '6px',
    animation: 'dropdownFadeIn 0.2s ease',
    margin: window.innerWidth <= 768 ? '0 auto' : '0',
    width: window.innerWidth <= 768 ? 'auto' : 'auto',
  };

  const innerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  };

  const getOptionStyle = (langCode: string): React.CSSProperties => {
    const isActive = langCode === currentLang.code;
    return {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '8px 12px',
      border: 'none',
      borderRadius: '8px',
      background: isActive ? 'rgba(76, 175, 80, 0.15)' : 'transparent',
      color: isActive ? '#fff' : 'rgba(255, 255, 255, 0.85)',
      cursor: 'pointer',
      fontSize: '13px',
      fontWeight: isActive ? '500' : '400',
      transition: 'all 0.15s ease',
      width: '100%',
      textAlign: 'left' as const,
    };
  };

  const optionFlagStyle: React.CSSProperties = {
    fontSize: '18px',
    lineHeight: 1,
    flexShrink: 0,
  };

  const optionNameStyle: React.CSSProperties = {
    flex: 1,
  };

  const getOptionCodeStyle = (langCode: string): React.CSSProperties => {
    const isActive = langCode === currentLang.code;
    return {
      fontSize: '10px',
      fontWeight: 600,
      letterSpacing: '0.5px',
      opacity: isActive ? 1 : 0.5,
      color: isActive ? '#4CAF50' : 'inherit',
    };
  };

  return (
    <div style={wrapperStyle}>
      <button
        ref={buttonRef}
        style={buttonStyle}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select language"
        disabled={isLoading}
        type="button"
        onMouseEnter={(e) => {
          if (!isLoading) {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isLoading) {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
          }
        }}
      >
        <Globe size={16} style={globeStyle} />
        <span style={flagStyle}>{currentLang.flag}</span>
        <span style={codeStyle}>{currentLang.code.toUpperCase()}</span>
        <ChevronDown size={14} style={chevronStyle} />
      </button>

      {isOpen && (
        <div 
          ref={dropdownRef}
          style={dropdownStyle}
          role="listbox"
          aria-label="Language options"
        >
          <div style={innerStyle}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                style={getOptionStyle(lang.code)}
                onClick={() => handleLanguageSelect(lang.code)}
                role="option"
                aria-selected={lang.code === currentLang.code}
                type="button"
                onMouseEnter={(e) => {
                  if (lang.code !== currentLang.code) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (lang.code !== currentLang.code) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <span style={optionFlagStyle}>{lang.flag}</span>
                <span style={optionNameStyle}>{lang.name}</span>
                <span style={getOptionCodeStyle(lang.code)}>
                  {lang.code.toUpperCase()}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}