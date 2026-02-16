// example 1
document.getElementById("changeTextButton").addEventListener("click",function(){
    document.getElementById("myParagraph").textContent= "paragraph changed";
});
//example 3
document.getElementById("changeOrder").addEventListener("click",function(){
    document.getElementById("coffeeType").textContent= "Coffee";
});
//example4
document.getElementById("addNewItem").addEventListener("click",function(){
    let newele = document.createElement("li");
    newele.textContent = "Ladoo";
    document.getElementById("shoppingList").appendChild(newele);
});
//example5
document.getElementById("removeLastTask").addEventListener("click",function(){
    document.getElementById("taskList").lastElementChild.remove();
});
//example7
document.getElementById("teaList").addEventListener("click",function(event){
         if(event.target && event.target.matches(".teaItem")){
            alert(`you selected ${event.target.textContent}`);
         }
});
//example8
document.getElementById("feedbackForm").addEventListener("submit",function(){
        event.preventDefault();
        let a = document.getElementById("feedbackInput").value;
        document.getElementById("feedbackDisplay").textContent = `Feedback is ${a}`;
})