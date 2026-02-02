import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

const Checkbox = ({ children, label }) => {
    return (
        <div className="flex items-center space-x-2">
            <ShadcnCheckbox id={label} />
            <Label
                htmlFor={label}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {children}
            </Label>
        </div>
    )
}

export default Checkbox