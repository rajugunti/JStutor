import "../css/Navigationbtns.css"




function Navigationbtns({
    currentIndex,
    setCurrentIndex,
    totalQuestions,
    onRestart,
    handleQuestionChange,
}){

    const handlePrev = ()=>{
        if(currentIndex > 0){
            handleQuestionChange(currentIndex-1);
        }
    };

    const handlenext = ()=>{
        if(currentIndex < totalQuestions-1){
            handleQuestionChange(currentIndex+1)
        }
    };
    
    const handleskip = () =>{
        handlenext();
    }




    return(
        <div className="navigation-buttons">
            <button
            className="previous"
            onClick={handlePrev}
            disabled={currentIndex === 0}>
            Previous
            </button>
            <button 
            className="restart"
            onClick={onRestart}>Restart</button>
            <button 
            className="skip"
            onClick={handleskip}>
            Skip
            </button>
            <button 
            className="next"
            onClick={handlenext}
            disabled={currentIndex === totalQuestions - 1}>
            Next
            </button>
        </div>
    )
    
}

export default Navigationbtns;