grid.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="grid.css">

    <title>Document</title>
</head>

<body>

    <main>
        <div class="item-a">A</div>
        <div class="item-b">B</div>
        <div class="item-c">C</div>
        <div class="item-d">D</div>
        <div class="item-e">E</div>
    </main>
</body>
</html>

grid.css

*{
    margin: 0;
    padding: 0;
}

a:hover{
    color: blanchedalmond;
}

body{
    background-color: hsl(0, 0%, 95%);
    display: flex;
    height: 100vh;
    place-items: center;
}

main{
    display: grid;
    grid-template-areas: 
    'a a a b'
    'c c d d'
    'c c e e'
    ;
    gap: 10px;
    width: 50%; 
    margin: auto;
}

main div{
    padding: 2cm;
    text-align: center;
    border-radius: 5px;
}

.item-a{
    background-color: hsl(31, 77%, 52%);
    grid-area: a;
}

.item-b{
    background-color: hsl(31, 96%, 37%);
    grid-area: b;
}

.item-c{
    background-color: rgb(134, 9, 9);
    grid-area: c;
}

.item-d{
    background-color: hsl(179, 86%, 14%);
    grid-area: d;
}

.item-e{
    background-color: hsl(179, 86%, 14%);
    grid-area: e;
}
