import Image from "next/image";
import { urlFor } from "../sanity/lib/image";

export const PortableRichImage = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          className="object-cover w-full mx-auto  md:h-80 lg:h-[520px] "
          src={urlFor(value).url()}
          alt="blog-post-image"
          height={1000}
          width={1000}
        />
      );
    },
  },
};
