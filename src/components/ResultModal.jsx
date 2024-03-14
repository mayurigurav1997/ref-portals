import React, { forwardRef } from 'react'

const ResultModal = forwardRef(function ({ result, targetTime }, ref) {
    return (
        <dialog ref={ref} className="result-modal" open>
            <h2>You {result} </h2>
            <p>The Target time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>X seconds left</strong></p>
            <form action="" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})

export default ResultModal
