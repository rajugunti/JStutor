
import "../css/QuestionSelector.css";

function QuestionSelector({ questions, currentIndex, onSelect }) {
    const getShortTitle = (questionText) => {
        return questionText
            .split(/\s+/)
            .slice(0, 5)
            .join(" ");
    };

    return (
        <div className="question-selector">
            <div>
                <select
                    value={currentIndex}
                    onChange={(event) => {
                        onSelect(Number(event.target.value));
                    }}
                >
                    {questions.map((question, index) => (
                        <option
                            key={question.id ?? index}
                            value={index}
                        >
                            {getShortTitle(question.question)}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <p>
                    Question {questions.length > 0 ? currentIndex + 1 : 0} of{" "}
                    {questions.length}
                </p>
            </div>
        </div>
    );
}

export default QuestionSelector;
