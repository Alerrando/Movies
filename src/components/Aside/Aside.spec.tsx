import { MenuBarProps } from '@/app/page';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Aside from '.';

const mockScreen = (size: number) => {
    window.screen = {
      ...screen,
      width: size
    };
};

describe("Aside component", () => {
    it("should render aside items", () => {
        const { getByTestId } = render(<Aside menuBar={{ value: '' }} setMenuBar={function (menuBar: MenuBarProps): void { throw new Error('Function not implemented.'); } } />)
        
        expect(getByTestId('aside-text-movie')).toBeInTheDocument();
    })
})