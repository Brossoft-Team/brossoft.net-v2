import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn('px-4 py-2 bg-primaryColor text-white rounded', className)}
        >
            {label}
        </button>
    );
};

export default Button;
