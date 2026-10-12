import React from "react";
import Link from "next/link";

interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "accent" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
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

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-md focus:outline-hidden focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs sm:text-sm",
    md: "px-5 py-2.5 text-sm sm:text-base",
    lg: "px-6 py-3 text-base sm:text-lg",
  };

  const variantStyles = {
    primary:
      "bg-primary text-text-inverse hover:bg-primary-hover focus:ring-primary shadow-xs hover:shadow-md",
    secondary:
      "bg-secondary-light text-primary hover:bg-secondary-light/80 focus:ring-secondary",
    accent:
      "bg-accent text-primary-dark hover:bg-accent-hover focus:ring-accent font-bold shadow-xs hover:shadow-md",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-text-inverse focus:ring-primary",
    white:
      "bg-surface text-primary hover:bg-surface-muted focus:ring-surface shadow-xs",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

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
