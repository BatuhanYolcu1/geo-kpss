'use client';

import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'icon' | 'toggle';
    size?: 'sm' | 'md' | 'lg';
    isActive?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    isLoading?: boolean;
    children?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            isActive = false,
            leftIcon,
            rightIcon,
            isLoading,
            children,
            className = '',
            disabled,
            ...props
        },
        ref
    ) => {
        // Base styles
        const baseStyles =
            'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all focus-ring cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

        // Size variants
        const sizeStyles = {
            sm: 'text-xs px-2.5 py-1.5',
            md: 'text-sm px-4 py-2',
            lg: 'text-base px-6 py-3',
        };

        // Variant styles
        const variantStyles = {
            primary:
                'bg-primary text-white hover:bg-primary-hover active:scale-[0.98]',
            secondary:
                'bg-muted text-foreground border border-border hover:bg-border active:scale-[0.98]',
            ghost:
                'bg-transparent text-foreground hover:bg-muted active:bg-border',
            icon:
                'p-2 bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground',
            toggle: isActive
                ? 'bg-primary-bg text-primary border border-primary shadow-[0_0_0_2px] shadow-primary-bg'
                : 'bg-transparent text-muted-foreground border border-transparent hover:bg-muted',
        };

        // Icon-only size adjustments
        const iconSizeStyles = {
            sm: 'p-1.5',
            md: 'p-2',
            lg: 'p-3',
        };

        const computedClassName = [
            baseStyles,
            variant === 'icon' ? iconSizeStyles[size] : sizeStyles[size],
            variantStyles[variant],
            className,
        ].join(' ');

        return (
            <button
                ref={ref}
                className={computedClassName}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && (
                    <svg
                        className="animate-spin h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                )}
                {!isLoading && leftIcon}
                {children}
                {rightIcon}
            </button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
