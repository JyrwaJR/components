import { cn } from "@src/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("tracking-tight", {
  variants: {
    variant: {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      h1: "scroll-m-20 font-extrabold",
      h2: "scroll-m-20 pb-2 font-semibold first:mt-0",
      h3: "scroll-m-20 font-semibold ",
      h4: "scroll-m-20 font-semibold ",
      p: "leading-7 [&:not(:first-child)]:mt-6",
    },
    size: {
      default: "text-base",
      h1: "text-4xl lg:text-5xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      p: "text-base",
      displayL: "text-5xl",
      displayM: "text-5xl",
      display: "text-5xl",
    },
    weight: {
      default: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
      medium: "font-medium",
      light: "font-light",
      extralight: "font-extralight",
      black: "font-black",
      thin: "font-thin",
    },
    colors: {
      default: "text-normal-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
      muted: " text-muted-foreground",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "default",
    weight: "default",
    colors: "default",
  },
});
export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}

const Typography = React.forwardRef<HTMLHeadingElement, TextProps>(
  ({ className, variant, size, weight, colors, ...props }, ref) => {
    const Comp = "p";
    return (
      <Comp
        className={cn(
          textVariants({ variant, size, weight, colors, className }),
        )}
        ref={ref}
        {...props}
        aria-controls="p"
      />
    );
  },
);
Typography.displayName = "Typography";

export { Typography, textVariants };
