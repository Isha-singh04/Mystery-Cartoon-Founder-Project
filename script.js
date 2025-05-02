let targetValue = 'shinchan';
let boxes = document.querySelectorAll(".cartoon-box");
let h1 = document.querySelector('h1');


for (let box of boxes) {

  
        box.addEventListener('click', function () {

            let img = box.firstElementChild;
            img.style.display = 'initial'
            img.style.width = '300px'
            img.style.height = '150px'

            console.log(img);

            if (img.alt === targetValue) {
        
                h1.textContent = "shinchan found😍🎉🙈"
                h1.style.color = 'green'

            }
            else {
                
                h1.textContent = "continue searching...👀"
                h1.style.color = 'gold'
            }

            /*count++;
            if (count === 2) {
                isGameStart = false;
                h1.textContent = "Oh! No you Not found😕😢"
            }*/
        }
        )
    }




