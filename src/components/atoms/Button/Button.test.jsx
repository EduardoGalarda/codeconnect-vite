import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Button from './index'

describe('Button Component', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('applies the correct type attribute', () => {
        render(<Button type="submit">Submit</Button>)
        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
    })
})
