"use client";
import { paths } from "@/constants/paths";
import { cn } from "@through-motion/lib";
import { Logo, ScrollArea } from "@through-motion/ui";
import { ReactNode } from "react";

export const AuthContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-auto py-2",
        className
      )}
    >
      <div className={cn("bg-white px-5 sm:px-10")}>
        <Logo
          // className="h-[85px] w-[150px]"
          variant="black"
          href={paths.auth.login}
        />
      </div>
      <ScrollArea
        //@ts-ignore
        viewportclassName={cn(
          "block items-center justify-center pt-10 md:flex"
        )}
        className="h-full px-5 sm:px-10 md:px-0"
      >
        {children}
      </ScrollArea>
    </div>
  );
};
