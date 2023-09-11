import { useState } from "react";

function DateCounter() {
    const [step, setStep] = useState(0);
    const [count, setCount] = useState(0);
    const currentDate = new Date();

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


    const dayOfWeek = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const dayOfMonth = [currentDate.getDate()];
    const year = [currentDate.getFullYear()];


    const formattedDate = `Today is ${dayOfWeek} ${month} ${dayOfMonth} ${year}`;


    console.log(formattedDate);



    function stepIncrement() {
        console.log("stepIncrement is working!");
        setStep(step + 1)
    }

    function stepDec() {
        console.log("stepDec is working!");
        setStep(step - 1)
    }

    function countInc() {
        console.log("countInc is working!");
        setCount(count + 1)
        dayOfMonth[0] = dayOfMonth[0] + 1;

    }

    function countDec() {
        console.log("countDec is working!");
        setCount(count - 1)
    }

    return (
        <>
            <div style={{ backgroundColor: "gray", width: "50%", margin: "100px auto", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={stepDec}>-</button>
                    <p>Step: {step}</p>
                    <button onClick={stepIncrement}>+</button>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <button onClick={countDec}>-</button>
                    <p>Count: {count}</p>
                    <button onClick={countInc}>+</button>
                </div>

                <p>
                    
                </p>
            </div>
        </>
    )
}

export default DateCounter;







