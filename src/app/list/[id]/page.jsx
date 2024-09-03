import { SinglePost } from "@/components/SinglePost";

const SingleList = async ({ params }) => {
  const { id } = params;
  const result = await fetch(`https://dev.to/api/articles/${id}`);

  const singlePostData = await result.json();
  console.log({ singlePostData });

  return (
    <div className="mt-[100px] flex justify-self-center items-self-center gap-9">
      <SinglePost
        title={singlePostData.title}
        cover={singlePostData.cover_image}
        body={singlePostData.description}
      />
    </div>
  );
};

export default SingleList;
