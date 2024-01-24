
function storage() {
    var saveList = localStorage.getItem("saveList");

    if (saveList) {
        $("ul").html(saveList);
    }
}

function saveData() {
    var currentData = $("ul").html();
    localStorage.setItem("saveList", currentData);
}

$(document).ready(function() {
    storage();

        $("button").click(function () {
    
            if ($("input").val() !== ""){
    
                
                if ($("input").trim !== null) {
                    $("ul").append(`<li class="d-flex my-2 p-2 border shadow justify-content-between fs-5">${$("input").val()} <span><button class="btn complete text-success">✔</button><button class="btn delete">❌</button></span></li>`)
            
                    $("input").val(null) 
    
                    saveData();
                }
            }
    
        });

                              
        $(".complete").click(function () {
            var $li = $(this).closest("li");
        
            if ($(this).text() !== "Completed") {
                $(this).text("Completed");
                $li.css("text-decoration", "line-through");
            } else {
                $(this).text("✔");
                $li.css("text-decoration", "none");
            }
        
            // Save the updated data to localStorage
            saveData();
        });

        $(".delete").click(function () {
            $(this).closest("li").remove();
            saveData();
        })
    
})