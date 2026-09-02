import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', href, className, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-white text-background hover:bg-white/90",
      secondary: "bg-secondary-background text-white hover:bg-white/10",
      outline: "border border-white/20 text-white hover:bg-white/5",
      ghost: "text-white hover:bg-white/10 hover:text-white"
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base"
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes} ref={ref as React.Ref<HTMLAnchorElement>} {...(props as any)}>
          {children}
        </a>
      );
    }

    return (
      <motion.button 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes} 
        ref={ref as React.Ref<HTMLButtonElement>} 
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
