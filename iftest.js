function test(input)
{
    let grade = Number(input[0])
    if (grade >= 6.01) 
    {
        console.log("WRONG ENTRY!")
    }
    else {
    if (grade >= 5.50) 
    {
        console.log("Excellent!")
    }
    if (grade <= 2.49) 
    {
        console.log("Didn't pass!")
    }
    else
    {
        console.log("You pass!")
    }
    }
}
test(["2.4"])