"use client";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function Login() {
  return (
    <div className="flex items-center justify-center mt-44   ">
      <Card
        placeholder=""
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        color="transparent"
        shadow={false}
        className="border-2  border-blue-gray-900 p-10"
      >
        <Typography
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          variant="h4"
          color="blue-gray"
        >
          Sign Up
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          color="gray"
          className="mt-1 font-normal"
        >
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Your Name
            </Typography>
            <Input
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Your Email
            </Typography>
            <Input
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              variant="h6"
              color="blue-gray"
              className="-mb-3"
            >
              Password
            </Typography>
            <Input
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                placeholder=""
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            crossOrigin={undefined}
          />
          <Button
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="mt-6"
            fullWidth
          >
            sign up
          </Button>
          <Typography
            placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
