const mainCourseMenu = ['Steak -$20', 'Pasta -$18', 'Burger -$15', 'Salmon -$12'];
const dessertMenu = ['Cake - $9', 'Ice Cream -$3', 'Pudding -$7', 'Fruit Salad -$5'];
const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict -$22.99', 'Oatmeal -$21.99', 'Frittata -$15'];

const breakfastMenuItemsHTML = breakfastMenu.map((item,index)=> `<p>Item ${index+1}: ${item}</p>`).join('')
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML

let mainCourseItem = ''
mainCourseMenu.forEach((item,index) => mainCourseItem += `<p>Item ${index+1}: ${item}</p>`)
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem

let dessertItem = ''
for (i = 0; i< dessertMenu.length; i++){
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`
}
document.getElementById('dessertMenuItems').innerHTML=dessertItem