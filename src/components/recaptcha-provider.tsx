"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lfn8N4oAAAAAFl8IlIhsh-ci869qxLklUeipLeT">
      {children}
    </GoogleReCaptchaProvider>
  );
}
