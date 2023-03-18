import { MenuBarProps } from '@/app/page';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '.';
import '@testing-library/jest-dom'

describe("Header Component", () => {
    it('should render header items', () => {
        const { getByTestId } = render(<Header currentPage={''} menuBar={{value: ''}} setMenuBar={function (menuBar: MenuBarProps): void {throw new Error('Function not implemented.');} } />)

        expect(getByTestId("test-home")).toBeInTheDocument()
        expect(getByTestId("test-movies")).toBeInTheDocument()
        expect(getByTestId("test-series")).toBeInTheDocument()
        expect(getByTestId("test-plans")).toBeInTheDocument()
    });
})