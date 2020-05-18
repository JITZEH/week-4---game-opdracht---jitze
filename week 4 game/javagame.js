alert("je woont in 's-Gravendeel. Je gaat naar het mbo, je hebt er veel zin in,maar je weet nog niet welke richting je op wilt")



var richting = (prompt('welke richting kies je? kies je A: bouw of B: engineering (zorg dat je CAPS LOCK aan staat)'));


if (richting == 'A') {
    var bouwA1 = (prompt('A: je moet naar Hardinxveld-Giessendam en elke dag om 6 uur op om me te rijden met een docent     -     B: je ouders kopen voor jou een op gevoerde scooter  om elke dag naar school te rijden'))

    if (bouwA1 == 'A') {
        var bouwA2 = (prompt('je red het jaar maar net en gaat naar mbo 2.           A: je gaat werken bij een supermarkt in het weekend       -       B:je gaat op voetbal '))
        if (bouwA2 == 'A') {
            alert("Je maakt elsnel nieuwe vrienden bij je werk en je hebt daarmee de 'the good life' sticker verdient ")
            document.write('Great Job!!!')
        } else {
            var bouwB3 = ('je wordt bij de voetbal gepest. game over')
            document.write('¡GAME OVER!')
            document.write('<br/>')
            document.write('<br/>')
            document.write('<br/>')
            document.write('<br/>')
            document.write("<img src = 'images/gameover.png'  />")
        }
    } else {
        var bouwB1 = (alert('gevangenis in wegens spook rijden en veel te op gevoerde scoorter             ¡GAME OVER!'))
        document.write('¡GAME OVER!')
        document.write('<br/>')
        document.write('<br/>')
        document.write('<br/>')
        document.write('<br/>')
        document.write("<img src = 'images/gameover.png'  />")
    }
} else {
    var engineeringA1 = (prompt(" je hebt verveelde docenten, maar het gaat nog    \n      A: je gaat gewoon over en je krijgt een 'leuke' klas met veel gangsters die jij altijd wel grappig vindt    -     B: je je gaat gewoon over naar mbo 2, maar kiest er dan weer toch voor bouw mbo 2 "))

    if (engineeringA1 == 'A') {
        var engineeringA2 = alert("het is een klas met veel 'foute jongens' je gaat jatten de Plus, werkt als drugsverkoper en op gegeven moment wordt je gedood, omdat je te weinig gram aflevert                      ¡GAME OVER!")
        document.write('¡GAME OVER!')
        document.write('<br/>')
        document.write('<br/>')
        document.write('<br/>')
        document.write('<br/>')
        document.write("<img src = 'images/gameover.png'  />")
        if (engineeringA1 == 'A') {
            var engineeringA3 = (ALERT('klik op enter'))
            if (engineeringA3 == 'A') {



            } else {
                var engineeringB3 = ('je wordt bij de voetbal gepest. game over')
                document.write('¡GAME OVER!')
                document.write('<br/>')
                document.write('<br/>')
                document.write('<br/>')
                document.write('<br/>')
                document.write("<img src = 'images/gameover.png'  />")
            }


        } else {
            prompt('A: je gaat werken bij een supermarkt in het weekend       -       B:je gaat op voetbal')
        }
    } else {
        var engineeringB2 = (prompt('je red het jaar maar net en gaat naar mbo 2.           A: je gaat werken bij een supermarkt in het weekend       -       B:je gaat op voetbal '))
        alert("Je maakt al snel nieuwe vrienden bij je werk en je hebt daarmee de 'the good life' sticker verdient ")
        document.write('Great Job!!!')
    }

}