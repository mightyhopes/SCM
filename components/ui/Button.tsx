import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg border border-transparent bg-clip-padding text-sm whitespace-nowrap outline-hidden select-none focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs hover:shadow-md",
        primary:
          "bg-primary text-primary-foreground hover:bg-primary-hover shadow-xs hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent-hover font-bold shadow-xs hover:shadow-md",
        outline:
          "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5 text-sm sm:text-base",
        xs: "h-6 px-2 text-xs rounded-xs",
        sm: "h-8 px-3.5 py-1.5 text-xs sm:text-sm rounded-md",
        md: "h-10 px-5 py-2.5 text-sm sm:text-base",
        lg: "h-12 px-6 py-3 text-base sm:text-lg",
        icon: "size-10 rounded-md",
        "icon-xs": "size-6 rounded-xs",
        "icon-sm": "size-8 rounded-md",
        "icon-lg": "size-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  href,
  ...props
}: ButtonProps) {
  const combinedClasses = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

export { Button, buttonVariants };
