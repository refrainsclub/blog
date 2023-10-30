import { Html } from "@react-email/html";
import { Tailwind } from "@react-email/tailwind";
import { Head } from "@react-email/head";
import { Preview } from "@react-email/preview";
import { Body } from "@react-email/body";
import { Container } from "@react-email/container";
import { Heading } from "@react-email/heading";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/hr";

const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#09090b",
        muted: "#f4f4f5",
        "muted-foreground": "#71717a",
      },
    },
  },
};

export function ContactFormResponse({
  name = "Tony Stark",
  email = "tonystark@gmail.com",
  message = "Lorem ipsum dolar sit amet",
}: {
  name: string;
  email: string;
  message: string;
}) {
  return (
    <Tailwind config={tailwindConfig}>
      <Html>
        <Head />
        <Preview>{name} has left you a message</Preview>
        <Body className="bg-background font-sans text-foreground">
          <Container className="px-4 py-6">
            <Heading className="text-2xl">New Message</Heading>
            <Text>
              A message has been left on{" "}
              <Link
                href="https://jamesblair.nz/"
                target="_blank"
                className="text-foreground underline underline-offset-4"
              >
                James Blair
              </Link>
              .
            </Text>
            <Heading className="text-lg">Name</Heading>
            <Text>{name}</Text>
            <Heading className="text-lg">Email</Heading>
            <Text>{email}</Text>
            <Heading className="text-lg">Message</Heading>
            <Text>{message}</Text>
            <Hr className="text-muted" />
            <Text className="text-sm text-muted-foreground">
              This message was intended for James Blair. If you believe this
              message was sent to you in error, please safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
}
