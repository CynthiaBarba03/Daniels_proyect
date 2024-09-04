import Image from "next/image";
import {
  Typography,
  Card,
  CardBody,
  Button
} from "@material-tailwind/react";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import { NewComment } from "./new-comment";
import { useState } from "react";


interface CommentCardProps {
  img: string;
  name: string;
  desc: string;
  hours: string;
  id: string;
  userMe: {
    name: string;
    img: string;
  };
  handleupdate: (element: {
    id: string;
    reply?: string;
    topic: number;
    img: string;
    name: string;
    hours: string;
    desc: string;
  }) => void;
}

export function CommentCard({ img, name, desc, hours, id, userMe, handleupdate }: CommentCardProps) {
  const [isReply, setIsReply] = useState(false)
  return (
    <Card placeholder=""
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}

      shadow={false}
      color="transparent"
      className="grid items-center gap-6 "
    >
      <Card placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} className="p-0 gap-5 flex flex-col ">
        <div className=" !m-0 h-full  w-full  max-h-[40px] max-w-[40px] ">
          <Image
            width={768}
            height={768}
            src={img}
            alt="img"
            className="h-full rounded w-full object-cover object-center"
          />
        </div>
        <div>
          <div className="flex gap-1 mb-3 items-center">
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="small"
              className=" font-bold flex items-center gap-2 !text-gray-900"
            >
              {name}
            </Typography>
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} variant="small" className="font-medium !text-gray-500">
              {hours}
            </Typography>
          </div>
          <Typography placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined} className="w-full font-normal mb-4 !text-gray-500">
            {desc}
          </Typography>
          <div className="!w-full flex justify-end">
            <div className="flex items-center gap-2">
              <Button
                placeholder=""



                onClick={() => setIsReply(!isReply)}
                size="sm"
                variant="text"
                color="gray"
                className="flex items-center gap-1 flex-shrink-0"

                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}              >
                <ArrowUturnLeftIcon className="w-4 text-4 h-4" />
                Reply
              </Button>
              <Button placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                size="sm"
                variant="text"
                color="red"
                className="flex items-center gap-1 flex-shrink-0"
              >
                <HeartIcon className="w-4 text-4 h-4" />
                Reply
              </Button>
            </div>
          </div>
        </div>
        {isReply && <NewComment setIsReply={setIsReply} reply={id} userMe={userMe} id={id} handleupdate={handleupdate} />}
      </Card>
    </Card>
  );
}

export default CommentCard;