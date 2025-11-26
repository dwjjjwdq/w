export default async function main() {
    console.log('start App');

    const mainMenu = document.querySelector('#main-menu');
    const creditScreen = document.querySelector('#credit-screen');
    const optionScreen = document.querySelector('#option-screen');

    let currentScreen = "mainMenu";
    let currentIndex = 0;

    const menuitems = document.querySelectorAll(".menu-item");
    const menuitem_count = menuitems.length;

    console.log("menu count:", menuitem_count);

    // 초기 커서
    menuitems[currentIndex].classList.add("select");

    window.addEventListener("keydown", (e) => {

        // 현재 화면이 메인 메뉴일 때만 메뉴 이동 가능
        if (currentScreen === "mainMenu") {

            menuitems[currentIndex].classList.remove('select');

            if (e.key === "ArrowUp") {
                currentIndex--;
                if (currentIndex < 0) currentIndex = menuitem_count - 1;
            }
            else if (e.key === "ArrowDown") {
                currentIndex++;
                currentIndex %= menuitem_count;
            }
            else if (e.key === "Enter") {

                const action = menuitems[currentIndex].dataset.action;
                console.log("Selected:", action);

                if (action === 'credit') {
                    mainMenu.classList.add('hide');
                    creditScreen.classList.remove('hide');
                    currentScreen = "creditScreen";
                    return;
                }

                if (action === 'option') {
                    mainMenu.classList.add('hide');
                    optionScreen.classList.remove('hide');
                    currentScreen = "optionScreen";
                    return;
                }
            }

            // 이동 후 선택 표시
            menuitems[currentIndex].classList.add('select');
        }

        // ▷ credit 화면에서 Enter → 메인메뉴
        else if (currentScreen === "creditScreen") {
            if (e.key === "Enter") {
                creditScreen.classList.add('hide');
                mainMenu.classList.remove('hide');
                currentScreen = "mainMenu";
            }
        }

        // ▷ option 화면에서 Enter → 메인메뉴
        else if (currentScreen === "optionScreen") {
            if (e.key === "Enter") {
                optionScreen.classList.add('hide');
                mainMenu.classList.remove('hide');
                currentScreen = "mainMenu";
            }
        }

    });
}
