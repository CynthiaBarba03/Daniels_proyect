import Image from "next/image";
import { Button, Typography, Textarea } from "@material-tailwind/react";
import { useState } from "react";
import { Comment } from "@/app";
import { v4 as uuidv4 } from 'uuid';
interface NewCommentProps {
  handleupdate: (element: {
    id: string;
    reply?: string;
    topic: number;
    img: string;
    name: string;
    hours: string;
    desc: string;
  }) => void;
  id: string;
  userMe: {
    name: string;
    img: string;
  };


  reply: string | undefined;
  setIsReply?: (value: boolean) => void;
}

export function NewComment({ handleupdate, id, userMe, reply, setIsReply }: NewCommentProps) {


  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date();

    handleupdate({
      id: uuidv4(),
      reply: reply,
      topic: Number(id),
      img: userMe?.img,
      name: userMe?.name,
      hours: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}T${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`,
      desc: message,
    } as Comment);
    setMessage("");
    setIsReply && setIsReply(false);
  };

  return (
    <div>
      <div className="flex !items-center gap-4">
        <div className="!m-0 h-full w-full max-h-[40px] max-w-[40px]">
          <Image
            width={768}
            height={768}
            src={userMe?.img}
            alt="Avatar"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <Typography placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="small"
          className="font-bold flex items-center gap-2 !text-gray-900"
        >
          {userMe?.name}
        </Typography>
      </div>
      <div className="flex-col mt-4 pl-14 h-full">
        <form onSubmit={handleSubmit} className="flex flex-col items-end">
          <Textarea
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            label="Tu mensaje"
            variant="static"
            placeholder="Escribe una respuesta amable o vete a casa..."
          />
          <Button placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined} onClick={handleSubmit} color="gray" className="mt-4" size="md">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}