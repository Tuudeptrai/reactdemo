
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizData } from '../../services/apiSevice';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;

    useEffect(()=>{
        fetchQuestion();
    },[quizId]);

    const fetchQuestion = async()=>{
        const res= await getQuizData(quizId);
        console.log('res',res );
    }

    return (
        <>
            <div className="Detail-quiz-container">DetailQuiz</div>
        </>
    )
}
export default DetailQuiz;