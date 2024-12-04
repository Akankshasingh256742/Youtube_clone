import React from "react";
import commentdata from "../util/commentdata";

function Comments() {
  return (
    <div>
      <p className="text-2xl font-bold">Comments</p>
      <Commentcontainer commentlist={commentdata} />
    </div>
  );
}

function Commentcontainer({ commentlist }) {
  return (
    <div>
      {commentlist.map((reply) => {
        return (
          <div>
            <Comment data={reply} />
            <div className="pl-10 border-l-2">
                <Commentcontainer commentlist={reply.replies} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Comment({ data }) {
  return (
    <div className="flex gap-4 m-3 mt-6">
      <img
        className="w-12 rounded-full border-2 border-gray-300"
        src="https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png"
        alt=""
      />
      <div className="">
        <p className="text-lg font-semibold ">{data.name}</p>
        <p className="text-sm">{data.text}</p>
      </div>
    </div>
  );
}

export default Comments;
