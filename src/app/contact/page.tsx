import { ContactForm } from "@/app/contact/contact-form";
import { RecaptchaProvider } from "@/components/recaptcha-provider";

export default function Contact() {
  return (
    <main className="container mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Contact</h1>
      <RecaptchaProvider>
        <ContactForm />
      </RecaptchaProvider>
    </main>
  );
}
