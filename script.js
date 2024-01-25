
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