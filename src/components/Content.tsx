import BlogPost from "./BlogPost";

const blogArr = [
  {
    title: "Meet the Crew",
    date: "23rd June 2021",
    body: "Our first blog post",
    author: "Mohamed and Vyoma",
      },
];

function Content(): JSX.Element {
  return (
    <main>
      {blogArr.map((blogpost) => (
        <BlogPost
          key={blogpost.author}
          title={blogpost.title}
          date={blogpost.date}
          //image={blogpost.image}
          body={blogpost.body}
          author={blogpost.author}
        />
      ))}
    </main>
  );
}

export default Content;
