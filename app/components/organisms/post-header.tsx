import Avatar from "../atoms/avatar";
import DateFormatter from "../atoms/date-formatter";
import { CoverImage } from "../molecules/cover-image";
import PostTitle from "../atoms/post-title";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
  image: string;
};

export const PostHeader = ({
  title,
  coverImage,
  date,
  author,
  image,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author} picture={image} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author} picture={image} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date?.toString()} />
        </div>
      </div>
    </>
  );
};
