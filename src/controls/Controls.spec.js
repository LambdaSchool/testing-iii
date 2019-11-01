// Test away!
import React from "react";
import Controls from './Controls';
import { render } from "@testing-library/react";

// import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

test('Controls rendering', () =>{
    expect(render(<Controls />)).toMatchSnapshot();
})
// close gate/open gate
// state of gate is locked, then unlocked.

test('close changes to open - unlock to locked', () => {
    const mockGateFeature = jest.fn();
    mockGateFeature(/close gate/i);
    mockGateFeature(/open gate/i );
    expect(mockGateFeature).toHaveBeenCalled();
    expect(mockGateFeature).toHaveBeenCalledTimes(2);
    // expect(mockGateFeature).toHaveBeenCalledWith(/open gate/i);

})

// close the gate and unlock the gate.
// will be both locked and locked later.

test('close and unlock gate', () => {
    const mockGateFeature = jest.fn();
    const mockGateFeature = jest.fn();

    mockGateFeature(/close gate/i);
    mockGateFeature(/unlock gate/i);

    expect(mockGateFeature).toHaveBeenCalled();
    expect(mockGateFeature).toHaveBeenCalledTimes();
    expect(mockGateFeature).toHaveBeenCalledWith(/unlock gate/i);

})


// test("Render the Controls Panel", async () => {
//     const wrapper = rtl.render(<Controls />);
//     // await wrapper.findAllByText(/controls/i);

//     // const element = wrapper.getByText(/controls/i);

//     expect(controls).toMatchSnapshot();
// });

// test('Toggle Button', async () => {
//     const wrapper = rtl.render(<Controls />);
//     await wrapper.findByText(/button/i);

//     const open = wrapper.getByText(/open/i)
//     const closed = wrapper.getByText(/closed/i)
//     const lock = wrapper.getByText(/lock/i)
//     const unlocked = wrapper.getByText(/unlocked/i)

//     rtl.act(() => {
//         rtl.fireEvent.click(open)
//     })
//         rtl.act(() => {
//             rtl.fireEvent.click(closed)
//         })
//             rtl.act(() => {
//                 rtl.fireEvent.click(lock)
//             })
//                 rtl.act(() => {
//                     rtl.fireEvent.click(unlocked)
//     })

//     expect(wrapper.queryByAllText(/button/i)).toBeNull()
// })