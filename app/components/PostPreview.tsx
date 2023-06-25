import Link from "next/link";
import { PostMetadata } from "./PostsMetaData";


const PostPreview = (props: PostMetadata) => {
    return (
        <div className="border border-violet-600 p-4 rounded-md shadow-md">
            <Link href={`/posts/${props.slug}`}>
                <h2 className="font-bold text-violet-400 hover:underline">{props.title}</h2>
            </Link>
            <p className="text-sm text-slate-400">{props.date}</p>
            <p className="text-slate-500">{props.subtitle}</p>
       </div>
    );
};

export default PostPreview;