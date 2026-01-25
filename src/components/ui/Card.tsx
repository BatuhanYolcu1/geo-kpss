'use client';

import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'interactive' | 'glass';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'default',
            padding = 'md',
            children,
            className = '',
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles = 'rounded-lg';

        // Variant styles
        const variantStyles = {
            default:
                'bg-card border border-border shadow-sm',
            elevated:
                'bg-card border border-border shadow-lg',
            interactive:
                'bg-card border border-border shadow-sm transition-all hover:border-primary hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
            glass:
                'glass',
        };

        // Padding styles
        const paddingStyles = {
            none: '',
            sm: 'p-3',
            md: 'p-4',
            lg: 'p-6',
        };

        const computedClassName = [
            baseStyles,
            variantStyles[variant],
            paddingStyles[padding],
            className,
        ].join(' ');

        return (
            <div ref={ref} className={computedClassName} {...props}>
                {children}
            </div>
        );
    }
);

Card.displayName = 'Card';

// Card Header Component
export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ children, className = '', ...props }, ref) => (
        <div
            ref={ref}
            className={`flex flex-col space-y-1.5 pb-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    )
);

CardHeader.displayName = 'CardHeader';

// Card Title Component
export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ children, as: Component = 'h3', className = '', ...props }, ref) => (
        <Component
            ref={ref}
            className={`text-lg font-semibold text-foreground leading-tight ${className}`}
            {...props}
        >
            {children}
        </Component>
    )
);

CardTitle.displayName = 'CardTitle';

// Card Description Component
export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
    children: ReactNode;
}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
    ({ children, className = '', ...props }, ref) => (
        <p
            ref={ref}
            className={`text-sm text-muted-foreground ${className}`}
            {...props}
        >
            {children}
        </p>
    )
);

CardDescription.displayName = 'CardDescription';

// Card Content Component
export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
    ({ children, className = '', ...props }, ref) => (
        <div ref={ref} className={className} {...props}>
            {children}
        </div>
    )
);

CardContent.displayName = 'CardContent';

// Card Footer Component
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
    ({ children, className = '', ...props }, ref) => (
        <div
            ref={ref}
            className={`flex items-center pt-4 border-t border-border ${className}`}
            {...props}
        >
            {children}
        </div>
    )
);

CardFooter.displayName = 'CardFooter';

export default Card;
