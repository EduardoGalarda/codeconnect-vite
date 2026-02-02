import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const TypeField = ({ label, type, placeholder, value, setValor }) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
            <Label htmlFor={type}>{label}</Label>
            <Input
                required
                type={type}
                placeholder={placeholder}
                id={type}
                value={value}
                onChange={(event) => setValor(event.target.value)}
            />
        </div>
    )
}

export default TypeField
