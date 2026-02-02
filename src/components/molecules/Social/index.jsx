import { cn } from "@/lib/utils"
import { Github, Chrome, Linkedin, Instagram, Twitter } from "lucide-react"

const iconMap = {
    Github: Github,
    Google: Chrome,
    Linkedin: Linkedin,
    Instagram: Instagram,
    Twitter: Twitter,
}

const Social = ({ link, name, className }) => {
    const Icon = iconMap[name] || Github

    return (
        <li className={cn("inline-flex items-center", className)}>
            <a
                href={link}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card hover:bg-accent transition-all text-sm font-medium shadow-sm hover:shadow-md"
            >
                <Icon className="w-4 h-4" />
                {name}
            </a>
        </li>
    )
}

export default Social
