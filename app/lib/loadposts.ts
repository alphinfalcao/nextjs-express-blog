export async function loadPosts() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:3001/api/blogs");
  const data = await res.json();
  return data;
}

export const loadPostsDetails = async (id: string) => {
  // Call an external API endpoint to get posts details
  const res = await fetch(`http://localhost:3001/api/blogs/${id}`);
  const data = await res.json();
  return data;
};
