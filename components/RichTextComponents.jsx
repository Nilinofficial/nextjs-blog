import Image from "next/image";
import Link from "next/link";
import urlFor from "@/lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object contain"
            fill
            src={urlFor(value).url()}
            alt="Blog post image"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-5xl py-6 font-bold ">{children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className="text-4xl py-6 font-bold">{children}</h1>
    ),
    h3: ({ children }) => (
      <h1 className="text-3xl py-6 font-bold">{children}</h1>
    ),
    h4: ({ children }) => (
      <h1 className="text-2xl py-6 font-bold">{children}</h1>
    ),
  },
  blockquote: ({ children }) => (
    <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-5 my-5">
      {children}
    </blockquote>
  ),
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#F7AB0A] hover:decoration-black"
        ></Link>
      );
    },
  },
};
