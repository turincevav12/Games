window.onload = () => {
    var level = 0;
    setTimeout(function(){
        alert('Привет Юлечка, я так по тебе скучал, но меня украл злой кот, Темнохвост')
        alert('Зайди под мост и попробуй меня найти, я буду оставлять подсказки.')
    },1000)
    
    document.getElementById('door').onclick = function() {
        document.getElementById('hello').style.display = "none"
        document.getElementById('map1').style.display = "inline-block"

        setTimeout(function(){
            alert('Ты попала в мир котов воителей, теперь иди к пастбищу, одна из лошадок знает где Темнохвост!!!')
        },500)
        
    }

    document.getElementById('Bmap1').onclick = () =>{
        document.getElementById('map2').style.display = "none"
        document.getElementById('map3').style.display = "none"
        document.getElementById('map1').style.display = "inline-block"
    }
    document.getElementById('Bmap2').onclick = () =>{
        document.getElementById('map1').style.display = "none"
        document.getElementById('map2').style.display = "inline-block"
        setTimeout(function(){
            alert('Умница, ты дошла до 2 уровня!!! Тут будет сложнее, приготовся!')
            alert('Отправляйся в лагерь двуногих!')
        },1000)
    }
    document.getElementById('Bmap3').onclick = () =>{
        document.getElementById('map1').style.display = "none"
    }

    document.getElementById('hourse').onclick = () => {
        var dialogSelect = document.getElementById('dialogSelect')
        alert('Здравствуй Юля, что ты хотела спросить?')
        var qusteion = ["Как тебя зовут?", "Где найти Темнохвоста?", "Ты знаешь где Антон?", "Как у тебя дела?"]

        for(var i = 0; i != 4; i++){
            var div = document.createElement('div')
            div.innerText = qusteion[i]
            div.id = 'hourseVopros' + i
            div.className = "dialogSelectLine"
            dialogSelect.appendChild(div)
        }
        var div = document.createElement('div')
        div.innerText = "Закрыть"
        div.id = 'close'
        div.className = "dialogSelectLine"
        dialogSelect.appendChild(div)

        dialogSelect.style.display = "block"

        document.getElementById('hourseVopros0').onclick = () => {
            alert('Меня зовут Филип.')
        }
        document.getElementById('hourseVopros1').onclick = () => {
            alert('Этого я не знаю, но ты попробуй спросить об этом в домике на краю карты, дам подсказку, у него 2 трубы, одна часть белая.')
            level++
        }
        document.getElementById('hourseVopros2').onclick = () => {
            alert('Нет не знаю, я только слышал что его схватил Темнохвост.')
        }
        document.getElementById('hourseVopros3').onclick = () => {
            alert('Нормально, только трава суховата.')
        }

        document.getElementById('close').onclick = () => {
            dialogSelect.style.display = "none"
            dialogSelect.innerHTML = ''
        }
    }
    
    document.getElementById('houm').onclick = () => {
        var houmVopros = ['Извините, я ошиблась', "Вы знаете Антона?", "Вы видели Чернохвоста?"]
        if (level == 1){
            alert('Да, чем мы можем помочь?')
            for(var i = 0; i != 3; i++){
                var div = document.createElement('div')
                div.innerText = houmVopros[i]
                div.id = 'houmVopros' + i
                div.className = "dialogSelectLine"
                dialogSelect.appendChild(div)
            }
            var div = document.createElement('div')
            div.innerText = "Закрыть"
            div.id = 'closeH'
            div.className = "dialogSelectLine"
            dialogSelect.appendChild(div)
    
            dialogSelect.style.display = "block"

            document.getElementById('houmVopros0').onclick = () => {
                alert('Нечего страшного!')
            }
            document.getElementById('houmVopros1').onclick = () => {
                alert('Нет, а это кто?')
            }
            document.getElementById('houmVopros2').onclick = () => {
                alert('Да, я видел как он проходил возле фермы амбара Ячменя')
                level++
            }

            document.getElementById('closeH').onclick = () => {
                dialogSelect.style.display = "none"
                dialogSelect.innerHTML = ''
            }

        }else{
            alert('Не зачем мне это')
        }
    }

    document.getElementById('ferm').onclick = () => {
        var fermVopros = ['Вы видели Чернохвоста?', "Вы знаете Антона?", "Как продвигаются дела?", "По какой стоимости солома?", "Ой я ошиблась!"]
        if (level == 2){
            alert('Да, чем мы можем помочь?')
            for(var i = 0; i != 5; i++){
                var div = document.createElement('div')
                div.innerText = fermVopros[i]
                div.id = 'fermVopros' + i
                div.className = "dialogSelectLine"
                dialogSelect.appendChild(div)
            }
            var div = document.createElement('div')
            div.innerText = "Закрыть"
            div.id = 'closeH'
            div.className = "dialogSelectLine"
            dialogSelect.appendChild(div)
    
            dialogSelect.style.display = "block"

            document.getElementById('fermVopros0').onclick = () => {
                alert('Да он пошел в другое королевство, если хочешь туда же, тебе надо перейти на карту №2')
                level++
            }
            document.getElementById('fermVopros1').onclick = () => {
                alert('Нет, а это кто?')
            }
            document.getElementById('fermVopros2').onclick = () => {
                alert('Очень плохо, ни кто нечего не покупает')
            }
            document.getElementById('fermVopros3').onclick = () => {
                alert('по 10 рублей за кг')
            }
            document.getElementById('fermVopros4').onclick = () => {
                alert('Очень жаль')
            }

            document.getElementById('closeH').onclick = () => {
                dialogSelect.style.display = "none"
                dialogSelect.innerHTML = ''
            }

        }else{
            alert('Не зачем мне это')
        }
    }

    document.getElementById('lagerdvynog').onclick = () => {
        document.getElementById('map2').style.display = "none"
        document.getElementById('enterLager').style.display = "inline-block"
    }
    document.getElementById('vxod1').onclick = () => {
        alert('Вы обнаружили пустую пещеру, с останками еды!')
    }
    document.getElementById('vxod2').onclick = () => {
        alert('Вы нечего не нашли!')
    }
    document.getElementById('vxod3').onclick = () => {
        var poplVopros = ['Ты знаешь где темнохвост?', "Я ищу своего Антона", "Нет, я просто гуляла"]
        alert('Вы нашли Сумасшедшего Двуногово')

        document.getElementById('people').style.display = "inline-block"

        alert("Наконец то человек в этих краях, что ты хочешь?")

        for(var i = 0; i != 3; i++){
            var div = document.createElement('div')
            div.innerText = poplVopros[i]
            div.id = 'poplVopros' + i
            div.className = "dialogSelectLine"
            dialogSelect.appendChild(div)
        }
        var div = document.createElement('div')
        div.innerText = "Закрыть"
        div.id = 'closeH'
        div.className = "dialogSelectLine"
        dialogSelect.appendChild(div)

        dialogSelect.style.display = "block"

        document.getElementById('poplVopros0').onclick = () => {
            zagadka1 = ['Оскар', 'Пушист', "Чернохвост"]
            zagadka2 = []
            zagadka3 = []
            alert('Да, но я так давно был одинок, я загадаю загатку, если отгодаешь, отвечу!')
            dialogSelect.innerHTML = ''
            var span = document.createElement('span')
            span.innerText = "Это чёрный кот. И он презерает племена.Чуть не стал цилителем. Коты считают его эгоистом."
            dialogSelect.appendChild(span)
            for(var i = 0; i != 3; i++){
                var div = document.createElement('div')
                div.innerText = zagadka1[i]
                div.id = 'zagadka1' + i
                div.className = "dialogSelectLine"
                dialogSelect.appendChild(div)
            }
            
            document.getElementById('zagadka10').onclick = () => {
                alert('Все верно, я видео чернохвоста возле лунного озера!')
                level++
                dialogSelect.style.display = "none"
                document.getElementById('enterLager').style.display = "none"
                document.getElementById('map2').style.display = "inline-block"
                dialogSelect.innerHTML = ''
            }
            document.getElementById('zagadka11').onclick = () => {
                alert('Не верно!!!')
            }
            document.getElementById('zagadka12').onclick = () => {
                alert('Не верно!!!')
            }
        }
        document.getElementById('poplVopros1').onclick = () => {
            alert('Да, знаю, хороший мальчик лет 20!')
        }
        document.getElementById('poplVopros2').onclick = () => {
            alert('ААА, ну ты заходи на чай хотя бы!!!')
        }
        document.getElementById('closeH').onclick = () => {
            dialogSelect.style.display = "none"
            dialogSelect.innerHTML = ''
        }
    }

    document.getElementById('ozero').onclick = () => {
        alert('Спасите, помогите, пожалуйста!!!')

        var helpVopros = ["Помочь", "Не помогать"]
        for(var i = 0; i != 2; i++){
            var div = document.createElement('div')
            div.innerText = helpVopros[i]
            div.id = 'helpVopros' + i
            div.className = "dialogSelectLine"
            dialogSelect.appendChild(div)
        }
        dialogSelect.style.display = "inline-block"

        document.getElementById('helpVopros0').onclick = () => {
            alert('Спасибо, вы спасли мне жизнь, забыла представиться, меня зовут Лакомка из племяни Ветров')
            alert('Ты почему плачешь, что у тебя случилось?')
            dialogSelect.innerHTML = ""

            var otvetOzero = ["У меня все хорошо", "Темнохвост украл моего любимого("]
            for(var i = 0; i != 2; i++){
                var div = document.createElement('div')
                div.innerText = otvetOzero[i]
                div.id = 'otvetOzero' + i
                div.className = "dialogSelectLine"
                dialogSelect.appendChild(div)
            }
            dialogSelect.style.display = "inline-block"

            document.getElementById('otvetOzero0').onclick = () => {
                alert('Пошли тогда гулять на озеро, там знаю очень красивый берег.')
            }
            document.getElementById('otvetOzero1').onclick = () => {
                alert('Не плач, я помогу тебе, я видела кота на 3 карте, возле пещеры клана падающей воды!')

                alert('Я тебя туда переброшу за свое спасение!')

                document.getElementById('map2').style.display = "none"
                document.getElementById('map3').style.display = "inline-block"

                dialogSelect.innerHTML = ""
                dialogSelect.style.display = "none"
            }
        }
        document.getElementById('helpVopros1').onclick = () => {
            alert('Игра провалена!!!')
            close()
        }
    }
}