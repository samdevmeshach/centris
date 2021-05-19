import React from 'react'
import NavBar from '../layout/NavBar'
import CalculatorContent from '../layout/CalculatorContent'
const Calculator = () => {
    return (
        <div>
            <NavBar />
            <h1 className="m-5">Calculator</h1>
            <CalculatorContent />
        </div>
    )
}

export default Calculator
