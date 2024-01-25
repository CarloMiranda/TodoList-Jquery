// To get the data from local storage
function storage() {
    var saveList = localStorage.getItem("saveList");

    if (saveList) {
        $("ul").html(saveList);
    }
}

// To save the data to local storage
function saveData() {
    var currentData = $("ul").html();
    localStorage.setItem("saveList", currentData);
}

$(document).ready(function() {
    storage();

        $("button").click(function () {
            
            // To make sure that the input field is not empty and not added to the list.
            if ($("input").val() !== ""){
    
                // When the input field is not empty, add the input value to the list.
                if ($("input").trim !== "") {
                    $("ul").append(`
                        <li class="d-flex my-2 p-2 border shadow justify-content-between fs-5">
                            <p>${$("input").val()}</p>
                            <span class="d-flex">
                                <button class="btn complete text-success">✔</button>
                                <button class="btn delete">❌</button>
                            </span>
                        </li>`);
                    $("input").val(null) 
    
                    saveData();
                    BtnEvents();
                }
            }
    
        });

        // To Bind Complete and Delete Buttons to make a funtion when there is an Event.
        function BtnEvents() {
            $(".complete").off().on("click", function () {
                var $p = $(this).closest("li").find("p");
            
                if ($(this).text() !== "Completed") {
                    $(this).text("Completed");
                    $p.css("text-decoration", "line-through");
                    $(this).css("text-decoration", "none");
                } else {
                    $(this).text("✔");
                    $p.css("text-decoration", "none");
                }
            
                saveData();
            });
            
            $(".delete").off().on("click", function () {
                $(this).closest("li").remove();
                saveData();
            });
        }
    BtnEvents();
});