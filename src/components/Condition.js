function MissedGoal(){
    return <h1>Missed</h1>
}
function MadeGoal(){
    return <h1>Made</h1>
}
function Goal(props){
    const isGoal = props.isGoal;
    return isGoal ? <MadeGoal/> : <MissedGoal/>
}

export default Goal