import { ReactNode } from "react";

export interface formProps {
    children: ReactNode;
    action: (formData: FormData) => void;
    className?: string;
    onSubmit?: () => void;
}

export interface todoProps {
    id:string;
    title?: string | null;
    is_completed: boolean;
    createdAt?: Date;
}