import Avatar from "./atoms/avatar";
import DateFormatter from "./atoms/date-formatter";
import { CoverImage } from "./molecules/cover-image";
import Link from "next/link";
import { Datum } from "../interfaces/post";

const PostPreview = ({ title, image, createdAt, author, slug, _id }: Datum) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} _id={_id} src={image} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link
          as={`/posts/${slug}/${_id}`}
          href="/posts/[slug]/[id]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={createdAt.toString()} />
      </div>
      <Avatar name={author as string} picture={image} />
    </div>
  );
};

export default PostPreview;
