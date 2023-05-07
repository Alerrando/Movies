import * as React from 'react';
import { render,screen } from '@testing-library/react'
import CarouselMain from '.';

describe("<CarouselMain />", () => {
    it("should by text in 'Movies'", () => {
        render(<CarouselMain />);

        expect(screen.getAllByText("Movies")).toBeInTheDocument();
    })
})