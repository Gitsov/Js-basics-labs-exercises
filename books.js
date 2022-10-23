function books(input)
{
    let page = Number(input[0]);
    let pageperhour = Number(input[1]);
    let days = Number(input[2]);
    let total = page/pageperhour;
    let daysneeded = total/days;
    console.log(daysneeded);
}
books(["212 ", "20 ","2 "])