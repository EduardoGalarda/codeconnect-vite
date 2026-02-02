import { Button as ShadcnButton } from '@/components/ui/button'

const Button = ({ children, type, ...props }) => {
    return (
        <ShadcnButton type={type} className="w-full" {...props}>
            {children}
        </ShadcnButton>
    )
}

export default Button
