export default function Home() {
  return (
    <main className="container mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">
        Kia ora, I{"'"}m James Blair. 👋
      </h1>
      <div className="prose dark:prose-invert">
        <p>
          I{"'"}m a high school student from New Zealand. I{"'"}m interested in
          programming, design and automation. This website is place for me to
          share my projects and ideas.
        </p>
        <p>
          Currently I{"'"}m working on a tool hire platform called Rentool. This
          platform enables locals to rent out tools to neighbours. Part of this
          project has involved talking to the local council, and developing the
          app using popular technologies such as Next.js, React, Tailwind CSS,
          TypeScript, Prisma, shadcn/ui and SST.
        </p>
        <p>
          I am also a developer for a Minecraft minigame network. So far I have
          coded minigames such as FastBuilder and MLGRush. I have also helped
          patch security vulnerabilities, improve the performance of the server,
          and use tools such as Pterodactyl Panel, Docker and Tailscale to
          administer and automate the server.
        </p>
      </div>
    </main>
  );
}
