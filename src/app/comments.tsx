"use client";

import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";

import { v4 as uuidv4 } from 'uuid';
import { NewComment } from "@/components/new-comment";
import ReplyComponent from "@/components/replyComponent";


export interface Comment {
  id: string;
  reply?: string;
  topic: number;
  img: string;
  name: string;
  hours: string;
  desc: string;
}

export function Comments({ id }: { id: string }) {

  const urlParams = new URLSearchParams(window.location.search);
  const myParamReason = urlParams.get("name");
  console.log(myParamReason);



  const userMe = {
    name: "Daniels Shittu",
    img: "data:image/jpeg;base64,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",
  }
  const [Comments, setComments] = useState<Comment[]>([
    {
      id: uuidv4(),
      reply: undefined,
      topic: 1,
      img: "/image/avatar1.jpg",
      name: "Tina Andrew",
      hours: " · 7 minutes ago",
      desc: "Chance too good. God level bars. I'm so proud of @LifeOfDesiigner #1 song in the country. Panda! Don't be scared of the truth because we need to restart the human foundation in truth I stand with the most humility. We are so blessed!All praises and blessings to the families of people who never gave up on dreams. Don't forget, You're Awesome! ",
    },
    {
      id: uuidv4(),
      reply: undefined,
      topic: 1,
      img: "/image/avatar2.jpg",
      name: "Emma Roberts",
      hours: " · 2 hours ago",
      desc: "Hello guys, nice to have you on the platform! There will be a lot of great stuff coming soon. We will keep you posted for the latest news.Don't forget, You're awesome!",
    },


  ])
  const handleupdate = (element: Comment) => {
    setComments([...Comments, element])
  }

  return (
    <section className="w-full py-10 max-w-2xl mx-auto flex flex-col px-5 pb-20">
      <Typography placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} variant="h4" className=" md:text-center" color="blue-gray">
        3 Comentarios de {myParamReason}
      </Typography>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-1">
        {Comments.filter((e: any) => e.reply === undefined).map((props: Comment, i: number) => {
          return Number(id) === props.topic ? (
            <div key={i.toString()}> <ReplyComponent userMe={userMe} handleupdate={handleupdate} isReply={false} COMMENTS={Comments} props={props}></ReplyComponent> </div>
          ) : null;
        })}
        <div className="md:pl-14">

        </div>
      </div>
      <Typography
        placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        variant="h4"
        className="my-6 md:my-14 md:text-center"
        color="blue-gray"
      >
        Agrega tu Comentario
      </Typography>
      <NewComment reply={undefined} userMe={userMe} id={id} handleupdate={handleupdate} />
    </section>
  );
}
export default Comments;
