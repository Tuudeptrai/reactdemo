
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizData } from '../../services/apiSevice';
import _ from 'lodash';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

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

    return (
        <>
            <div className="Detail-quiz-container">DetailQuiz</div>
        </>
    )
}
export default DetailQuiz;