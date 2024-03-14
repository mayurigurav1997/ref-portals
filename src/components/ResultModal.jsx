import React, { forwardRef, useImperativeHandle, useRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

    const userLost = remainingTime <= 0;
    const formattedTime = (remainingTime / 1000).toFixed(2)
    const dialog = useRef()
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });
    return (
        <dialog ref={dialog} className="result-modal" open>
            {userLost && <h2>You Lost </h2>}
            {!userLost && <h2>You Score:{score} </h2>}
            <p>The Target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedTime} seconds left</strong></p>
            <form action="" method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal
