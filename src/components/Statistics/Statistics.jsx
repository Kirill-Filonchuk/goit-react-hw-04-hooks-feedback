import s from './Statistics.module.css'

const Notification = ({ message}) => (
    <div>
        <h4>{message}</h4>
    </div>
);

const Statistics = ({good, neutral, bad, total,positivePercentage}) => {
   
    if (total > 0) {
        return <>
            <h2>Statistics</h2>
            <div className={s.section}>
                {Object.entries({ good, neutral, bad }).map(([key, val]) => (
                    <p key={key} >{key}: <span>{val} vote</span></p>
                ))}
                <p key={'total'}>Total: <span>{total} vote</span></p>
                <p key={'percent'} className={s.positiv}>Positive feedback: <span className={s.positivCount}>{positivePercentage} %</span></p>
            </div>
        </>
    } else {
        return <>
            <h2>Statistics</h2>
            <Notification message={"No feedback given"} />
            </>
    }

    
}


export default Statistics;
