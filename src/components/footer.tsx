import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Company",
    items: ["About Us", "Careers"],
  },
  {
    title: "Pages",
    items: ["Login", "Register"],
  },
  {
    title: "Legal",
    items: ["Terms", "Privacy"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            as="a"
            href="https://www.material-tailwind.com"
            target="_blank"
            variant="h4"
            className="mb-6"
          >
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography placeholder=""
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined} variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography placeholder=""
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                      as="a"
                      href="#"
                      variant="small"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-end justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <div className="text-center md:text-start">
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} variant="h4" color="blue-gray" className="mb-2">
              The reward for getting on the stage is fame.
            </Typography>
            <Typography placeholder=""
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined} className="font-normal !text-gray-700">
              The price of fame is you can&apos;t get off the stage.
            </Typography>
          </div>
          <Typography placeholder=""
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            color="gray"
            className="text-center font-normal !text-gray-700"
          >
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              Material Tailwind
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Creative Tim
            </a>
            .
          </Typography>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
