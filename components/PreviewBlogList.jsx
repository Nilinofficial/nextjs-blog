"use client"

import { usePreview } from "@/lib/sanity.preview"
import BlogList from "./BlogList";

const PreviewBlogList = ({query}) => {

    const posts = usePreview(null,query);
   console.log("Loading posts...",posts);
  return (
    <BlogList posts={posts}/>
  )
}

export default PreviewBlogList