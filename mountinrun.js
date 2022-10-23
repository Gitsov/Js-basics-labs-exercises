function mountinrun(input){
    let recSecs=Number(input[0]);
    let distanceMetres=Number(input[1]);
    let timeinSecs=Number(input[2]);
    let hastoClimb=distanceMetres*timeinSecs;
    let timeAded=Math.floor(distanceMetres/50)*30;
    let totalTime=hastoClimb+timeAded;
    let diff=Math.abs(totalTime-recSecs)
    if (totalTime>=recSecs){
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    }
    else {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    }

}
mountinrun(["5554.36", "1340","3.23"])