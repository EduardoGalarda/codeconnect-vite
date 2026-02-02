import { cn } from "@/lib/utils"

const Text = ({ children, variant = "default" }) => {
    const variants = {
        default: "text-base text-foreground",
        muted: "text-sm text-muted-foreground",
        small: "text-xs text-muted-foreground",
    }

    return (
        <p className={cn(variants[variant] || variants.default, "my-2")}>
            {children}
        </p>
    )
}

export default Text