import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiSevice";
import './ListQuiz.scss';

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([]);
    useEffect(()=>{
        getQuizData();
    },[]);
    const getQuizData = async ()=>{
        const res = await getQuizByUser();
        // console.log('res',res );
        if(res&&res.EC===0){
            setArrQuiz(res.DT)
        }
    }
    return (
        <div className="list-quiz-container container">
            {arrQuiz&&arrQuiz.length >0&&
             arrQuiz.map((quiz, index)=> {
                return (
                    <div key={`${index}-quiz`} className="card" style={{width:"18rem"}}>
                    <img className="card-img-top" src={`data:image/png;base64,${quiz.image}`} alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Quiz {index+1}</h4>
                        <p className="card-text"> {quiz.description}</p>
                        <button className="btn btn-primary">Start now</button>
                    </div>
                </div>
                )
             })
            }
              {arrQuiz&&arrQuiz.length ===0&&
                    <div>You don't have any Quiz now</div>
              }  
        </div>
    )
}
export default ListQuiz;