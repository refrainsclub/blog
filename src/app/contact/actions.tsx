"use server";

import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import { ContactFormResponse } from "@/emails/contact-form-response";
import { contactFormSchema } from "@/app/contact/schema";
import { z } from "zod";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function submitContactForm(
  values: z.infer<typeof contactFormSchema>,
) {
  const res = contactFormSchema.safeParse(values);
  if (!res.success) {
    return { success: false, message: "Your response was invalid" };
  }

  const data = res.data;
  const passedCaptcha = verifyCaptchaToken(data.captchaToken);
  if (!passedCaptcha) {
    return { success: false, message: "Could not verify captcha token" };
  }

  const emailHtml = render(<ContactFormResponse {...data} />);
  await sgMail.send({
    from: {
      email: "noreply@jamesblair.nz",
      name: "James Blair",
    },
    to: {
      email: "james@blair.nz",
      name: "James Blair",
    },
    subject: `${data.name} has left you a message`,
    html: emailHtml,
  });

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
