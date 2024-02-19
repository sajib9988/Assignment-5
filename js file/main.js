let totalSeatNum = 40;
let selectedSeat = 0;
const allSeat = document.getElementsByClassName("seat");

let invalidCoupon = 0;
let discountedCount = 0;

for (let seat of allSeat) {

    seat.addEventListener("click", function (event) {

        // 4 tar besi seat select korle alert diba and return korbe
        if (selectedSeat === 4) {
            alert("You have already selected 4 seats!");
            return;
        }


        const seatText = seat.innerText;
        // seat bg and text color change
        seatColorUpdate(seatText);

        // total seat and selected seat er count update 
        totalSeatNum--;
        selectedSeat++;
        setInnerText("totalSeat", totalSeatNum);
        setInnerText("selectedSeat", selectedSeat);



        // selectedSeatDetails a jei jei seat select koresi ta append korbo.
        const selectedSeatDetails = document.getElementById("selectedSeatDetails");
        const newDiv = document.createElement("div");
        newDiv.classList.add('flex');
        newDiv.classList.add('justify-between');

        const newP1 = document.createElement("p");
        newP1.innerText = seatText;
        newDiv.appendChild(newP1);

        const newP2 = document.createElement("p");
        newP2.innerText = " Economoy";
        newDiv.appendChild(newP2);

        const newP3 = document.createElement("p");
        newP3.innerText = "550";
        newDiv.appendChild(newP3)


        selectedSeatDetails.appendChild(newDiv)



        // Total price sum
        const totalPrice = document.getElementById("totalPrice").innerText;
        const totalPriceInt = parseInt(totalPrice);
        setInnerText("totalPrice", totalPriceInt + 550);

        // than total price er inner text tai grand price a set koresi .
        const totalPriceForGrand = document.getElementById("totalPrice").innerText;
        const totalPriceForGrandInt = parseInt(totalPriceForGrand);
        setInnerText("grandPrice", totalPriceForGrandInt);

        // disable now selected button
        seat.setAttribute("disabled", true)


        // // Next button for modal
        // const phoneNumberInput = document.getElementById("phoneNumberInput");
        // phoneNumberInput.addEventListener("keyup", function (event) {
        //     const numberOfDigit = event.target.value.length;


        //     const nextButton = document.getElementById("nextButton");
        //     if (selectedSeat > 0 && numberOfDigit > 0 && numberOfDigit < 12) {
        //         nextButton.removeAttribute("disabled")
        //     }
        //     else if (numberOfDigit > 11) {
        //         nextButton.setAttribute("disabled", true)
        //     }
        //     else {
        //         nextButton.setAttribute("disabled", true)
        //     }
        // })


        // coupon code buttom inable 
        const couponButtom = document.getElementById("couponButtom");
        if (selectedSeat === 4) {
            couponButtom.removeAttribute('disabled', true)
        }

        // coupon code er input field 
        const couponDiv = document.getElementById("coupon");

        couponButtom.addEventListener("click", function () {
            const couponInput = document.getElementById("couponInput").value;
            if (couponInput === "NEW15") {
                const totalPrice = document.getElementById("totalPrice").innerText;
                const totalPriceInt = parseInt(totalPrice);
                const discount15 = (totalPriceInt * 15) / 100;

                const updateGrandTotal = totalPriceInt - discount15;
                setInnerText("grandPrice", updateGrandTotal);





                //   discountdPrice a append korbo
                const discountdPrice = document.getElementById("discountdPrice");
                const newDivDis = document.createElement("div");
                newDivDis.classList.add('flex');
                newDivDis.classList.add('justify-between');


                const newP2Dis = document.createElement("p");
                newP2Dis.innerText = " Discounted Price";
                newDivDis.appendChild(newP2Dis);

                const newP1Dis = document.createElement("p");
                newP1Dis.innerText ="BDT " + discount15;
                newDivDis.appendChild(newP1Dis);


                discountedCount++;
                if (discountedCount === 4) {
                    discountdPrice.appendChild(newDivDis)
                }

                //   discountdPrice a append kora ses

                couponDiv.classList.add('hidden');
            }
            else if (couponInput === "Couple 20") {
                const totalPrice = document.getElementById("totalPrice").innerText;
                const totalPriceInt = parseInt(totalPrice);
                const discount20 = (totalPriceInt * 20) / 100;

                const updateGrandTotal = totalPriceInt - discount20;
                setInnerText("grandPrice", updateGrandTotal);

                  //   discountdPrice a append korbo
                  const discountdPrice = document.getElementById("discountdPrice");
                  const newDivDis = document.createElement("div");
                  newDivDis.classList.add('flex');
                  newDivDis.classList.add('justify-between');
  
  
                  const newP2Dis = document.createElement("p");
                  newP2Dis.innerText = " Discounted Price";
                  newDivDis.appendChild(newP2Dis);
  
                  const newP1Dis = document.createElement("p");
                  newP1Dis.innerText = "BDT " + discount20;
                  newDivDis.appendChild(newP1Dis);
  
  
                  discountedCount++;
                  if (discountedCount === 4) {
                      discountdPrice.appendChild(newDivDis)
                  }
  
                  //   discountdPrice a append kora ses

                couponDiv.classList.add('hidden')
            }
            else {
                invalidCoupon++;
                if (invalidCoupon === 4) {

                    alert("Invalid Coupon Code !")
                    document.getElementById("couponInput").value = "";

                }
            }
        })





    })




}



 // Next button for modal
 const phoneNumberInput = document.getElementById("phoneNumberInput");
 phoneNumberInput.addEventListener("keyup", function (event) {
     const numberOfDigit = event.target.value.length;


     const nextButton = document.getElementById("nextButton");
     if (selectedSeat > 0 && numberOfDigit > 0 && numberOfDigit < 12) {
         nextButton.removeAttribute("disabled")
     }
     else if (numberOfDigit > 11) {
         nextButton.setAttribute("disabled", true)
     }
     else {
         nextButton.setAttribute("disabled", true)
     }
 })





const pageReload = document.getElementById("reloadPage")
pageReload.addEventListener("click", function(){
    location.reload();
})


