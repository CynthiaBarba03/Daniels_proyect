'use client'
import { Comment } from "@/app";
import CommentCard from "./comment-card";
import { v4 as uuidv4 } from 'uuid';
export default function ReplyComponent({
    handleupdate,
    userMe,
    props,
    COMMENTS,
    isReply
}: {

    props: {
        id: string;
        reply?: string;
        topic: number;
        img: string;
        name: string;
        hours: string;
        desc: string;
    },
    COMMENTS: {
        id: string;
        reply?: string;
        topic: number;
        img: string;
        name: string;
        hours: string;
        desc: string;
    }[],
    isReply: boolean,
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

}) {
    return (
        <div className="flex flex-col space-y-3">
            <CommentCard userMe={userMe} handleupdate={handleupdate} {...props} />
            {COMMENTS.map((element: Comment) => {
                const uniqueKey = `${element.id}-${uuidv4()}`;
                if (element?.reply === props.id) {
                    return (
                        <div className="ml-20" key={uniqueKey}>
                            <ReplyComponent
                                handleupdate={handleupdate}
                                userMe={userMe}
                                COMMENTS={COMMENTS}
                                isReply={false}

                                props={element}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
}