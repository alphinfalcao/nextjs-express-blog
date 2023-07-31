import { Container } from "../components/atoms/container";
import { MoreStories } from "../components/more-stories";
import { HeroPost } from "../components/molecules/heropost";
import { Intro } from "../components/intro";
import { Layout } from "../components/templates/layout";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Posts } from "../interfaces/post";
import { loadPosts } from "../lib/loadposts";

type Props = {
  posts: Posts;
};

export default function Index({ posts }: Props) {
  const morePosts = posts.data;
  const firstPost = posts.data[0];
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
        </Head>
        <Container>
          <Intro />
          {firstPost && (
            <HeroPost
              title={firstPost.title}
              _id={firstPost._id}
              image={firstPost.image}
              createdAt={firstPost.createdAt}
              author={firstPost.author}
              slug={firstPost.slug}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await loadPosts();
  return {
    props: { posts },
  };
};
