
const input = require('sync-input')
water = 400;
milk = 540;
beans = 120;
cups = 9;
money = 550;
inn = true;
while (inn){
    main();
}

function see(mainWater, mainMilk, mainBeans, mainCups, mainMoney){
    if (mainWater > water){
        console.log("Sorry, not enough water!");
    }else if(mainMilk > milk){
        console.log("Sorry, not enough milk!")
    }else if(mainBeans > beans){
        console.log("Sorry, not enough coffee beans!")
    }else if(mainCups > cups){
        console.log("Sorry, not enough cups!")
    }else{
        water -= mainWater;
        milk -= mainMilk;
        beans -= mainBeans;
        cups -= mainCups;
        money += mainMoney;
        console.log("I have enough resources, making you a coffee!");
    }
}
function buy(){
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
    let str = input();
    switch (str){
        case "1":
            see(250, 0, 16, 1, 4);
            break;
        case "2":
            see(350, 75, 20, 1, 7);
            break;
        case "3":
            see(200, 100, 12, 1, 6);
            break;
        case "back":
            main();
            break;
        default: console.log("err");
    }
}
function fill(){
    console.log("Write how many ml of water you want to add: ");
    water += Number(input());
    console.log("Write how many ml of milk you want to add:");
    milk += Number(input());
    console.log("Write how many grams of coffee beans you want to add:");
    beans += Number(input());
    console.log("Write how many disposable cups you want to add: ");
    cups += Number(input());
}
function take(){
    console.log(`I gave you $${money}`);
    money = 0;
}
function show(water, milk, beans, cups, money){
    console.log("The coffee machine has:\n" +
        water + " ml of water\n" +
        milk + " ml of milk\n" +
        beans + " g of coffee beans\n" +
        cups + " disposable cups\n" +
        "$" + money + " of money");
}
function main(){
    console.log("\n" + "Write action (buy, fill, take, remaining, exit): ")
    let choose = input();
    switch (choose){
        case "buy":
            buy();
            break;
        case "fill":
            fill();
            break;
        case "take":
            take();
            break;
        case "remaining":
            console.log();
            show(water, milk, beans, cups, money);
            break;
        case "exit":
            inn = false;
            break;
        default: console.log("err");
    }
}
