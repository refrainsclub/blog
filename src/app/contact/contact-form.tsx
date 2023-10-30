"use client";

import { submitContactForm } from "@/app/contact/actions";
import { contactFormSchema } from "@/app/contact/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";
import { useToast } from "@/components/use-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      captchaToken: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    if (!executeRecaptcha) {
      return;
    }

    const captchaToken = await executeRecaptcha("onSubmit");
    const result = await submitContactForm({ ...values, captchaToken });

    if (!result.success) {
      return toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }

    form.reset({ message: "" });
    toast({
      title: "Success",
      description: result.message,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  className="h-56"
                  placeholder="Your message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
