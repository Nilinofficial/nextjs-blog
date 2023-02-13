import { client } from "@/lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

export const revalidate = 60;

export async function generateStaticParams() { 
  const query = groq`
    *[_type == 'post' ] {
  slug
} 
    `;

const slugs = await client.fetch(query);
 const slugRoutes = slugs.map((slug) => slug.slug.current)

 return slugRoutes.map(slug => ({
  slug
 }))
}


const Post = async ({ params: { slug } }) => {
  const query = groq`
    *[_type == 'post' && slug.current == $slug][0] {
  ...,
  author-> ,
  categories[]-> ,
} 
    `;
  const post = await client.fetch(query, { slug });
  // console.log(post);
  return (
    <article className="px-10 pb-28">
      <section className="space-y-2 border border-[#F7AB0A] text-white">
        <div
          className="relative min-h-56 flex flex-col
       md:flex-row justify-between 
       "
        >
          <div
            className="absolute top-0 w-full h-full opacity-10
        blur-sm p-10  "
          >
           {post?.mainImage &&  <Image
              className="object-cover object-center mx-auto"
              src={post?.mainImage ? urlFor(post.mainImage).url() : null}
              alt={post?.author?.name ? post?.author?.name : null}
              fill
            />
            
            } 
          </div>
          <section className="p-5 bg-[#F7AB0A] w-full ">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post?.title && post.title}</h1>
                <p>
                  {post?._createdAt && new Date(  post?._createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex items-center space-x-2">
               {post?.author?.image && <Image
                  className="rounded-full"
                  src={post?.author?.image? urlFor(post.author.image).url(): null}
                  alt={post?.author?.name ? post?.author?.name : null}
                  height={40}
                  width={40}
                />} 

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post?.author?.name && post?.author?.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{ post?.description && post.description}</h2>

              <div
                className="flex items-center
              justify-end mt-auto space-x-2
              "
              >
                {post?.categories && post.categories.map((category) => (
                  <p
                    className="bg-gray-400 text-white px-3
                  py-1 rounded-full text-sm font-semibold mt-4"
                    key={category?._id && category._id}
                  >
                    {category.title&& category.title }
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* {post.body[0].children[0].text} */}

      <PortableText value={post?.body && post.body} components={RichTextComponents} />
    </article>
  );
};

export default Post;
