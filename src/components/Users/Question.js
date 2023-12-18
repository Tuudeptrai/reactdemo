import _ from "lodash";

const Question = (props) => {
    const {data, index} = props;

    // console.log('aswer',  data.answers)
    if(_.isEmpty(data)){
        return (
            <></>
        )
    }
    const handleChildCheckBox = (event, aId,qId)=>{
        // console.log('check',event.target.checked ,"id",aId,qId);
        props.handleCheckBox(aId,qId);
    }
    return (
        <>
             {data.image&& <div className="q-image">
                 <img src={`data:image/jpeg;base64,${data.image}`} alt="anhminhhoa"/>
                 </div>
                }
           
            <div className="question">
                   Question {index +1}: {data.questionDescription}?
                  </div>
                               
             <div className="anwser">
                {data.answers  &&
                data.answers.map((a,index)=>{
                   
                    return(
                        <div key={`answer-${index}`} className="a-child">
                            <div className="form-check">
                                <input checked={a.isSelected} onChange={(event)=>{handleChildCheckBox(event,a.id,data.questionld)}} className="form-check-input" type="checkbox"/>
                                <label className="form-check-label" >
                                {a.id}: {a.description}
                                </label>
                                </div>
                               
                        </div>
                    )     
                })
                }    
            </div>
               
        </>
    )
}
export default Question;