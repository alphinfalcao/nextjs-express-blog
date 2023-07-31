import Avatar from "../atoms/avatar";
import DateFormatter from "../atoms/date-formatter";
import { CoverImage } from "./cover-image";
import Link from "next/link";
import { Datum } from "../../interfaces/post";

export function HeroPost({
  title,
  image,
  createdAt,
  author,
  slug,
  _id,
}: Datum) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} _id={_id} src={image} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}/${_id}`}
              href="/posts/[slug]/[id]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={createdAt.toString()} />
          </div>
        </div>
        <div>
          <Avatar name={author} picture={image} />
        </div>
      </div>
    </section>
  );
}
