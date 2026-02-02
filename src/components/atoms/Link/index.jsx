import { cn } from "@/lib/utils"

const Link = ({ children, variant = "default", link, className, ...props }) => {
    const variants = {
        default: "text-primary hover:underline font-medium",
        muted: "text-muted-foreground hover:text-foreground transition-colors",
        linkCadastro: "text-primary hover:underline font-semibold",
    }

    return (
        <a
            href={link}
            className={cn(variants[variant] || variants.default, className)}
            {...props}
        >
            {children}
        </a>
    )
}

export default Link
