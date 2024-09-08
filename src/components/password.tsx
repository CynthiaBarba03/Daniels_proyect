import { Input } from "@material-tailwind/react";
import { useState } from "react";

interface TopicItem {
  id: string;
  name: string;
  type: string;
  password: string;
  description: string;
}

export function Password({ topic }: { topic: TopicItem }) {
  const [pass, setPass] = useState<string>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="w-72">
        <Input
          onPointerEnterCapture={undefined}
          crossOrigin={undefined}
          onPointerLeaveCapture={undefined}
          label="Password"
          type="password"
          onChange={handleInputChange}
        />
      </div>
      <button
        className="border-2 border-blue-gray-200 px-4 rounded-md"
        onClick={() => {
          if (topic.password === pass) {
            window.location.href = `/comments/${topic.id}?name=${topic.name}`;
            console.log("ok");
            console.log;
          } else {
            console.log("NO");
          }
        }}
      >
        Enviar
      </button>
    </div>
  );
}
