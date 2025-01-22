const posts = [
  { id: 1, title: "Post 1", description: "Post number one!" },
  { id: 2, title: "Post 2", description: "Post number two!" },
];

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const data = {
    toJSON() {
      return {
        post: posts.find((post: any) => post.id === parseInt(body.id, 10)),
      };
    },
  };
  return data;
});
