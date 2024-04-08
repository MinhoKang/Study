export interface ButtonProps {
    type: "button" | "submit" | "reset";
    text: string;
    form?: string;
    className?: string;
    onClick?: (() => Promise<void>) | (() => void);
}
