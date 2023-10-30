import { useMDXComponent } from "next-contentlayer/hooks";

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose-quoteless prose dark:prose-invert">
      <Component />
    </article>
  );
}
