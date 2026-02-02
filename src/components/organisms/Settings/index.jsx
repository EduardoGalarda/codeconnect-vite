import LanguageSelector from '../../molecules/LanguageSelector'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Settings as SettingsIcon } from "lucide-react"

const Settings = ({ children }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                    <SettingsIcon className="w-4 h-4" />
                    {children}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
                <div className="p-2 border-none">
                    <LanguageSelector />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default Settings
