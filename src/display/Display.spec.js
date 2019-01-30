// // Test away!
// import React from 'react';

// const Display = ({ closed, locked }) => {
//   const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
//   const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

//   return (
//     <div className="display panel">
//       <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
//       <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
//     </div>
//   );
// };

// Display.defaultProps = {
//   closed: false,
//   locked: false,
// };

// export default Display;

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('Display correct classname on closed/open div', () => {
	it('shows red-led class when closed is true', () => {
		const closed = true;
		const { container } = render(<Display closed={closed} />);

		expect(container.firstChild.firstChild.nextSibling).toHaveClass('red-led');
	});

	it('shows green-led class when closed is false', () => {
		const closed = false;
		const { container } = render(<Display closed={closed} />);

		expect(container.firstChild.firstChild.nextSibling).toHaveClass(
			'green-led'
		);
	});
});

describe('Display correct text within closed/open div', () => {
	it('has text saying Closed when closed is true', () => {
		const closed = true;
		const { container } = render(<Display closed={closed} />);
		expect(container.firstChild.firstChild.nextSibling).toHaveTextContent(
			'Closed'
		);
	});
	it('has text saying Open when closed is false', () => {
		const closed = false;
		const { container } = render(<Display closed={closed} />);
		expect(container.firstChild.firstChild.nextSibling).toHaveTextContent(
			'Open'
		);
	});
});

describe('Display correct classname on locked/unlocked div', () => {
	it('shows red-led class when locked is true', () => {
		const locked = true;
		const { container } = render(<Display locked={locked} />);

		expect(container.firstChild.firstChild).toHaveClass('red-led');
	});
	it('shows green-led class when locked is false', () => {
		const locked = false;
		const { container } = render(<Display locked={locked} />);

		expect(container.firstChild.firstChild).toHaveClass('green-led');
	});
});

describe('Display correct text within locked/unlocked div', () => {
	it('has text saying Locked when locked is true', () => {
		const locked = true;
		const { container } = render(<Display locked={locked} />);
		expect(container.firstChild.firstChild).toHaveTextContent(
			'Locked'
		);
	});
	it('has text saying Unlocked when locked is false', () => {
		const locked = false;
		const { container } = render(<Display locked={locked} />);
		expect(container.firstChild.firstChild).toHaveTextContent(
			'Unlocked'
		);
	});
});
