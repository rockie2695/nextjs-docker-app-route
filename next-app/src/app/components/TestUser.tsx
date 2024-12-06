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
// By unique identifier
const user = await prisma.user.findUnique({
  where: {
    email: 'elsa@prisma.io',
  },
})

// By ID
const user = await prisma.user.findUnique({
  where: {
    id: 99,
  },
})
  const user = await prisma.user.findUnique({
  where: {
    id: '60d5922d00581b8f0062e3a8',
  },
})
  const findUser = await prisma.user.findFirst({
  where: {
    posts: {
      some: {
        likes: {
          gt: 100,
        },
      },
    },
  },
  orderBy: {
    id: 'desc',
  },
})
  const users = await prisma.user.findMany({
  where: {
    email: {
      endsWith: 'prisma.io',
    },
  },
})
  const users = await prisma.user.findMany({
  where: {
    OR: [
      {
        name: {
          startsWith: 'E',
        },
      },
      {
        AND: {
          profileViews: {
            gt: 0,
          },
          role: {
            equals: 'ADMIN',
          },
        },
      },
    ],
  },
})
  const user = await prisma.user.findUnique({
  where: {
    email: 'emma@prisma.io',
  },
  select: {
    email: true,
    name: true,
  },
})
  const user = await prisma.user.findUnique({
  where: {
    email: 'emma@prisma.io',
  },
  select: {
    email: true,
    posts: {
      select: {
        likes: true,
      },
    },
  },
})
*/

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

const updateUsers = await prisma.user.updateMany({
  where: {
    email: {
      contains: 'prisma.io',
    },
  },
  data: {
    role: 'ADMIN',
  },
})
  const updatePosts = await prisma.post.updateMany({
  data: {
    views: {
      increment: 1,
    },
    likes: {
      increment: 1,
    },
  },
})v
  const upsertUser = await prisma.user.upsert({
  where: {
    email: 'viola@prisma.io',
  },
  update: {
    name: 'Viola the Magnificent',
  },
  create: {
    email: 'viola@prisma.io',
    name: 'Viola the Magnificent',
  },
})
  const deleteUser = await prisma.user.delete({
  where: {
    email: 'bert@prisma.io',
  },
})
  const deleteUsers = await prisma.user.deleteMany({
  where: {
    email: {
      contains: 'prisma.io',
    },
  },
})
  const deleteUsers = await prisma.user.deleteMany({})
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
