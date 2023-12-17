
import { useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { getQuizData } from '../../services/apiSevice';
import _ from 'lodash';
import './DetailQuiz.scss';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const {state} = useLocation();
    useEffect(()=>{
        fetchQuestion();
    },[quizId]);

    const fetchQuestion = async()=>{
        const res= await getQuizData(quizId);
       
        if(res&&res.EC===0){
            let raw =
            _.chain(res.DT) .groupBy("id").map((value, key) => {
                let answers = [];
                let questionDescription, image = null;
                value.forEach((item, index) => {
                    if(index===0){
                        questionDescription = item.description;
                        image = item.image;
                    }
                    answers. push(item.answers);
                       
                 })
                 return {questionld: key, answers, questionDescription, image } 
            })
            .value()
            console.log('raw',raw );
        }
    }
    console.log('state bypass', state.title );
    return (
        <>
          <div className="detail-quiz-container container">
                <div className="row">
                   
                        <div className="left-content col-md-8">
                            <div className="q-title">
                                <p>Quiz {state?.id}: {state?.title}</p>
                            </div>
                            <div className="q-body">
                                <img src="https://www.anhngumshoa.com/uploads/images/resize/550x550/test/11.jpg" alt="anhminhhoa"/>
                            </div>
                            <div className="q-content">
                               <div className="question">
                                 Question 1: Who R U?
                               </div>
                               <div className="anwser">
                                 <div className="a-1">
                                   a. đjdjdjd
                                 </div>
                                 <div className="a-2">
                                   b. ssjdjhdhjd
                                 </div>
                                 <div className="a-3">
                                   c.djhhhffh
                                 </div>
                               </div>
                            </div>
                            <div className="footer d-flex justify-content-center">
                              <button className='btn btn-primary mx-3'>Back</button>
                              <button className='btn btn-primary mx-3'>Next</button>
                            </div>
                        </div>
                    
                
                        <div className="right-content col-md-4">
                            <p>count down</p>
                        </div>
                  
                </div>
</div>


        </>
    )
}
export default DetailQuiz;