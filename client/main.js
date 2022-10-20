const fruits = ["Naranja", "Mandarina", "Fresa", "Mango", "Papaya"]

const divFruits = document.getElementById('divFruits');


    fruits.forEach(element => {
      divFruits.innerHTML += `<li>${element}</li>`;
        console.log(element);
    });


    const nums = [2, 4, 6, 8];
function solution(array) {
 	// Tu código aquí 
let nums2 = nums.map(num => num * 2);
	
	return nums2;
};

console.log(solution(nums));


