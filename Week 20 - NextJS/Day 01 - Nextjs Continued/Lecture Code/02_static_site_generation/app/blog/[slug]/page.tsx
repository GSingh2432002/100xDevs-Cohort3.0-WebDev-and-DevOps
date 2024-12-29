// app/blog/[slug]/page.tsx

type Post = {
    title: string;
    content: string;
    slug: string;
  };
  
  // Generate static paths for dynamic routes
  export async function generateStaticParams(): Promise<{ slug: string }[]> {
    const posts: Post[] = await fetch('https://jsonplaceholder.typicode.com/posts/').then((res) =>
      res.json()
    );
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }
  
  type BlogPostProps = {
    params: { slug: string };
  };
  
  const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
    const { slug } = params;
  
    const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
      next: { revalidate: 60 }, // Revalidate the page every 60 seconds
    }).then((res) => res.json());
  
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  };
  
  export default BlogPost;
  