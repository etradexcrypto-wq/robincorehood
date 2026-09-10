ts
// src/utils/googleTranslate.ts

type Language = {
  code: string;
  name: string;
  flag: string;
};

export const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
];

const STORAGE_KEY = "copyspheretx_language";
const GOOGLE_SCRIPT_ID = "google-translate-script";
const GOOGLE_ELEMENT_ID = "google_translate_element";

let isInitialized = false;
let initPromise: Promise<void> | null = null;

export function getStoredLanguage(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) || "en";
  } catch {
    return "en";
  }
}

export function setStoredLanguage(lang: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, lang);

    // Google Translate language cookie
    document.cookie = `googtrans=/en/${lang}; path=/; max-age=31536000`;

    // Also set without path for compatibility
    document.cookie = `googtrans=/en/${lang}; max-age=31536000`;
  } catch {
    // Ignore storage errors
  }
}

export function getLanguageInfo(code: string): Language | undefined {
  return languages.find((language) => language.code === code);
}

export function loadGoogleTranslate(): Promise<void> {
  // Already initialized
  if (isInitialized) {
    return Promise.resolve();
  }

  // Already loading
  if (initPromise) {
    return initPromise;
  }

  initPromise = new Promise((resolve, reject) => {
    // Google Translate already exists
    if (
      typeof window !== "undefined" &&
      window.google &&
      window.google.translate &&
      window.google.translate.TranslateElement
    ) {
      initializeGoogleTranslate();
      resolve();
      return;
    }

    // Create hidden Google Translate container
    let container = document.getElementById(GOOGLE_ELEMENT_ID);

    if (!container) {
      container = document.createElement("div");
      container.id = GOOGLE_ELEMENT_ID;

      container.style.position = "absolute";
      container.style.width = "1px";
      container.style.height = "1px";
      container.style.overflow = "hidden";
      container.style.opacity = "0";
      container.style.pointerEvents = "none";

      document.body.appendChild(container);
    }

    // Remove old script if necessary
    const oldScript = document.getElementById(GOOGLE_SCRIPT_ID);

    if (oldScript) {
      oldScript.remove();
    }

    // Google callback
    window.googleTranslateElementInit = () => {
      try {
        initializeGoogleTranslate();

        isInitialized = true;

        resolve();

        // Restore previously selected language
        const savedLanguage = getStoredLanguage();

        if (savedLanguage && savedLanguage !== "en") {
          setTimeout(() => {
            switchLanguage(savedLanguage);
          }, 800);
        }
      } catch (error) {
        console.error("Google Translate initialization failed:", error);
        reject(error);
      }
    };

    const script = document.createElement("script");

    script.id = GOOGLE_SCRIPT_ID;
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    script.onerror = () => {
      console.error("Failed to load Google Translate script.");
      reject(new Error("Failed to load Google Translate script"));
    };

    document.head.appendChild(script);
  });

  return initPromise;
}

function initializeGoogleTranslate(): void {
  if (
    !window.google ||
    !window.google.translate ||
    !window.google.translate.TranslateElement
  ) {
    throw new Error("Google Translate API is not available");
  }

  const container = document.getElementById(GOOGLE_ELEMENT_ID);

  if (!container) {
    throw new Error("Google Translate container not found");
  }

  // Prevent duplicate initialization
  if (container.getAttribute("data-google-initialized") === "true") {
    isInitialized = true;
    return;
  }

  new window.google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: languages
        .filter((language) => language.code !== "en")
        .map((language) => language.code)
        .join(","),
      autoDisplay: false,
      layout:
        window.google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    GOOGLE_ELEMENT_ID
  );

  container.setAttribute("data-google-initialized", "true");
  isInitialized = true;
}

export function switchLanguage(langCode: string): Promise<void> {
  return new Promise((resolve) => {
    // English = restore original page
    if (langCode === "en") {
      setStoredLanguage("en");

      // Clear Google Translate cookie
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

      // Try Google Translate reset
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (select) {
        select.value = "";
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }

      setTimeout(() => {
        window.location.reload();
      }, 100);

      resolve();
      return;
    }

    setStoredLanguage(langCode);

    const attemptSwitch = (attempt = 0) => {
      const select = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement | null;

      if (select) {
        console.log("Google Translate switching to:", langCode);

        // Set selected language
        select.value = langCode;

        // Trigger Google Translate
        select.dispatchEvent(
          new Event("change", {
            bubbles: true,
          })
        );

        // Some Google Translate versions need a native change event
        try {
          select.dispatchEvent(
            new Event("change", {
              bubbles: true,
              cancelable: true,
            })
          );
        } catch {
          // Ignore
        }

        resolve();
        return;
      }

      // Google Translate widget can take a moment to create the select
      if (attempt < 50) {
        setTimeout(() => {
          attemptSwitch(attempt + 1);
        }, 200);

        return;
      }

      console.warn(
        "Google Translate selector was not found. Reloading page..."
      );

      // Cookie is already saved, so reload should apply translation
      window.location.reload();

      resolve();
    };

    attemptSwitch();
  });
}

declare global {
  interface Window {
    google: {
      translate: {
        TranslateElement: any;
        TranslateElementInlineLayout: any;
        InlineLayout: {
          SIMPLE: any;
        };
      };
    };

    googleTranslateElementInit: () => void;
  }
}
