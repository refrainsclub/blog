"use server";

import { Resend } from "resend";
import { ContactFormResponse } from "@/emails/contact-form-response";
import { contactFormSchema } from "@/app/contact/schema";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitContactForm(
  values: z.infer<typeof contactFormSchema>,
) {
  const res = contactFormSchema.safeParse(values);
  if (!res.success) {
    return { success: false, message: "Your response was invalid" };
  }

  const { data } = res;
  const passedCaptcha = verifyCaptchaToken(data.captchaToken);
  if (!passedCaptcha) {
    return { success: false, message: "Could not verify captcha token" };
  }

  const email = await resend.emails.send({
    from: "Blog <blog@blair.nz>",
    to: "james@blair.nz",
    subject: `${data.name} has left you a message`,
    react: <ContactFormResponse {...data} />
  });

  if (email.error) {
    return { success: false, message: "Could not send email successfully" }
  }

  return { success: true, message: "Your message has been sent successfully" };
}

export async function verifyCaptchaToken(token: string) {
  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY!,
      response: token,
    }),
  });
  const data = await res.json();
  return data.success;
}
