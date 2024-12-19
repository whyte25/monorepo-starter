import { buttonVariants } from "@through-motion/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="font-bold items-center text-3xl md:text-5xl">
          Blog Not Found
        </h3>
        <p>Sorry, there is nothing to see here</p>
        <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
          Back To Blog
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
