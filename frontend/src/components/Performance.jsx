import "../css/performance.css"

function Performance({
    mistakes,
    accuracy,
    wpm,
    completed,
}){
    return(
        <div className="performance-cards">
            <div className="WPM">
                <p>WPM</p>
                <h1>{wpm}</h1>

            </div>
            <div className="Accuracy">
                <p>Accuracy</p>
                <h2>{Math.round(accuracy)}</h2>
            </div>
            <div className="Mistakes">
                <p>Mistakes</p>
                <h2>{mistakes}</h2>
            </div>
            <div>
                <p>Completed</p>
                <h2>{completed}</h2>
            </div>
        </div>
    )
}

export default Performance;