
function Question({ currentQuestion }) {
    return (
        <div className="questions">
            <p>Question</p>
            <h2>
                {currentQuestion?.question}
            </h2>
        </div>
    );
}

export default Question;
