
import Link from "next/link";
import Post from "./Post";

const BlogList = ({ posts }) => {
  return (
    <div className="">
      <hr className="border-gray-300 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  px-10 gap-10
      gap-y-16 pb-24
      ">
        {
          posts.map(post => (
            <Link key={post._id} href={`/post/${post.slug.current}`}>
            <Post post={post}  />
            </Link>
          ))
        }
       
      </div>
    </div>
  );
};

export default BlogList;
