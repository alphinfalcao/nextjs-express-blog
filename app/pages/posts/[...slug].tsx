import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Container } from "../../components/atoms/container";
import PostBody from "../../components/post-body";
import Header from "../../components/header";
import { PostHeader } from "../../components/organisms/post-header";
import { Layout } from "../../components/templates/layout";
import PostTitle from "../../components/atoms/post-title";
import Head from "next/head";
import { loadPosts, loadPostsDetails } from "../../lib/loadposts";
import { CMS_NAME } from "../../lib/constants";

type Props = {
  post: Post;
};

type Post = {
  data: Datum;
  status: string;
};

type Datum = {
  _id?: string;
  title: string;
  body?: string;
  image: string;
  author: string;
  slug: string;
  createdAt: Date | string;
  __v?: number;
};

export default function Post({ post }: Props) {
  const router = useRouter();
  const title = `${post.data.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.data.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={true}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.data.title}
                coverImage={post.data.image}
                date={post.data.createdAt.toString()}
                author={post.data.author}
                image={post.data.image}
              />
              <PostBody content={post.data.body} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

export const getStaticProps = async (params) => {
  const id = params.params.slug[1];
  const post = await loadPostsDetails(id);
  return {
    props: { post },
  };
};

export async function getStaticPaths() {
  const posts = await loadPosts();
  const paths = posts?.data?.map((post) => ({
    params: {
      slug: [post.slug, post._id],
    },
  }));
  return { paths, fallback: false };
}
