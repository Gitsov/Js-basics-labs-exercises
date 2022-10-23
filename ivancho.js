function record(input)
{
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timeSec = Number(input[2]);

    let totaltime = distance*timeSec;
    let slowtime=Math.floor(distance/15);
    totaltime=totaltime+(slowtime*12.5);
    if (totaltime<worldRecord){
    console.log(` Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`)}
    else{
      let diff=Math.abs(totaltime - worldRecord)
        console.log(` No, he failed! He was ${diff.toFixed(2)} seconds slower.`)
    }
}
record(["10464", "1500", "20"])