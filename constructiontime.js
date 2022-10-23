function constructiontime(input)
{
    let archname = input[0]
    let projects = input[1]
    let time = projects * 3
    console.log(`The architect ${archname} will need ${time} hours to complete ${projects} project/s.`)
}
constructiontime(['Martin', 2])