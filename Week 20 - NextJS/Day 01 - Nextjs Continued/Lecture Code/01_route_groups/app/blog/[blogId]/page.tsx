import axios from 'axios';

export default async function BlogPage({params}: any) {
    const postId = (await params).blogId;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = response.data;
    return (
        <div>
            <h1>Blog Page</h1>
            <br/>
            title - {data.title}
            <br/>
            body - {data.body}
        </div>
    )
}