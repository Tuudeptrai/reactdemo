
import { useEffect, useState } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { getQuizData } from '../../services/apiSevice';
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from './Question';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const {state} = useLocation();
    const [dataQuiz,setDataQuiz] = useState([]);
    const [index,setIndex] = useState(0);

    useEffect(()=>{
        fetchQuestion();
        
    },[quizId]);
    const handleBack= ()=>{
        if(index-1>=0){
            setIndex(index-1);
        }
        
    }
    console.log('dataQuiz', dataQuiz);
    const handleNext= ()=>{
       
        if(dataQuiz && index+1< dataQuiz.length )
            setIndex(index+1);
       
    }

    const handleCheckBox =(aId, qID)=>{
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let q = dataQuizClone.find(item => +item.questionld === +qID)
        if(q&&q.answers){
           let b= q.answers.map(item=>{
                if(+item.id===+aId){
                    item.isSelected =! item.isSelected;
                 }
                 return item;
            })
            q.answers=b;
            // console.log('>>>', b)
        }
        let index = dataQuizClone.findIndex(item =>+item.questionld ===+qID)
        if(index >-1){
            dataQuizClone[index] =q;
            setDataQuiz(dataQuizClone);
        }
    } 

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
                    item.answers.isSelected = false;
                    answers. push(item.answers);
                       
                 })
                 return {questionld: key, answers, questionDescription, image } 
            })
            .value()
            
            setDataQuiz(raw);
            console.log('>>>dataQuiz',dataQuiz );
        }
    }
    console.log('state bypass', state.title );
    return (
        <>
          <div className="detail-quiz-container container">
                <div className="row">
                   
                        <div className="left-content card col-md-7">
                            <div className="q-title">
                                <p>Quiz {state?.id}: {state?.title}</p>
                            </div>
                            <hr/>
                            <div className="q-content">
                              <Question 
                              handleCheckBox={handleCheckBox}
                              index={index} data={dataQuiz&&dataQuiz.length>0?dataQuiz[index]:[]}/>
                            </div>
                            <div className="footer d-flex justify-content-center">
                              <button onClick={()=>{handleBack()} } className='btn btn-secondary mx-3'>Back</button>
                              <button onClick={()=>{handleNext()} } className='btn btn-primary mx-3'>Next</button>
                              <button onClick={()=>{handleNext()} } className='btn btn-warning mx-3'>Fisnish</button>
                            </div>
                        </div>
                    
                
                        <div className="right-content card col-md-3">
                            <p>count down</p>
                        </div>
                  
                </div>
</div>


        </>
    )
}
export default DetailQuiz;