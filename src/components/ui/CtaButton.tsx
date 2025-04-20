
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const CtaButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  ...props
}: CtaButtonProps) => {
  const baseClasses = cn(
    "btn inline-flex items-center justify-center font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
    {
      "bg-rishi-green-dark text-white hover:bg-rishi-green-dark/90": variant === "primary",
      "bg-rishi-green-light text-white hover:bg-rishi-green-light/90": variant === "secondary",
      "border border-rishi-green-dark text-rishi-green-dark hover:bg-rishi-green-pale": variant === "outline",
      "px-3 py-1.5 text-sm": size === "sm",
      "px-4 py-2 text-base": size === "md",
      "px-6 py-3 text-lg": size === "lg",
    },
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
};
