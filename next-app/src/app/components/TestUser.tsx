import prisma from "../lib/prisma";

export async function TestUser() {
  // const allUsers = await prisma.user.findMany();
  // console.log(allUsers);
  const allUsers = await prisma.user.findMany({});
  console.log(allUsers);

  const partOfUsers = await prisma.user.findMany({
    where: {
      OR: [{ name: { contains: "Alice" } }, { name: { contains: "B" } }],
    },
  });
  console.log(partOfUsers);

  /*
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
      posts: {
        create: { title: 'Hello World' },
      },
      profile: {
        create: { bio: 'I like turtles' },
      },
    },
  })
  */

  const partOfUsers2 = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.log(partOfUsers2);

  /*
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true },
  })
  console.log(post)
  //return something like
  {
  id: 1,
  title: 'Hello World',
  content: null,
  published: true,
  authorId: 1
} 
  */


/*
//in mongo we can
await prisma.post.update({
    where: {
      slug: 'my-first-post',
    },
    data: {
      comments: {
        createMany: {
          data: [
            { comment: 'Great post!' },
            { comment: "Can't wait to read more!" },
          ],
        },
      },
    },
  })
  const posts = await prisma.post.findMany({
    include: {
      comments: true,
    },
  })
*/
  return <div>TestUser</div>;
}
