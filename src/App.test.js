import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

describe('icon', () => {
	test('Renders Learn React', () => {
		render(<App />);
		const element = screen.getByText('Learn React');
		expect(element).toBeInTheDocument();
	});
});
