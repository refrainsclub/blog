"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Le98JopAAAAALfc2CDVH8uMUKdgezlVcFT-MChG">
      {children}
    </GoogleReCaptchaProvider>
  );
}
