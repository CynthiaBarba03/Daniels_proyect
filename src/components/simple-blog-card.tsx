
import { Typography, Card, CardBody } from "@material-tailwind/react";

interface SimpleContentCard {
  title: string;
  subtitle: string;
  name: string;
  icon: React.ElementType;
}

export function SimpleBlogCard({
  title,
  subtitle,
  name,
  icon: Icon,
}: SimpleContentCard) {
  return (
    <div className=" pb-10">
      <div className="flex items-center mb-3 gap-2">
        <Icon className="h-5 w-5 text-gray-900" />
        <Typography placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined} className="w-full" variant="h6">
          {title}
        </Typography>
      </div>
      <Typography placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} className="!text-base w-7/12 md:w-full mb-3 font-normal !text-gray-700">
        {subtitle}
      </Typography>
      <Typography placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined} className="!text-xs font-normal !text-gray-500">
        {name}
      </Typography>
    </div>
  );
}

export default SimpleBlogCard;