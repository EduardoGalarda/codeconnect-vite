import { cn } from "@/lib/utils"

const Social = ({ link, name, className }) => {
    return (
        <li className={cn("inline-flex items-center mx-2", className)}>
            <a
                href={link}
                className="flex items-center gap-2 p-2 rounded-lg border border-border bg-card hover:bg-accent transition-colors text-sm font-medium"
            >
                <img src={`/${name}.svg`} alt={`icone do ${name}`} className="w-5 h-5" />
                {name}
            </a>
        </li>
    )
}

export default Social
