$(document).ready(function () {
    const queryURL = "https://www.dnd5eapi.co/api/";
    $.ajax({
        url: queryURL,
        type: "GET",
        success: function (result) {
            console.log(result)
        },
        error: function (error) {
            console.log(error);
        }
    })
    //for class
    const classSelect = $("#class")
    classSelect.on('click',function(event){
        const className = $(this).val() 
        console.log(className)
    $.ajax({ 
        url: queryURL + "classes/",
        type: "GET",
        success: function (result){
            console.log(result.results)
        },
        error: function(error){
            console.log(error);
        }
    }) 
    }) 
    //for spells
    const spellSelect = $("#spells")
    spellSelect.on('change',function(event){
        const spellName = $(this).val() 
        console.log(spellName)
    $.ajax({ 
        url: queryURL + "spells/",
        type: "GET",
        success: function (result){
            console.log(result)
        },
        error: function(error){
            console.log(error);
        }
    }) 
    })
    //for races
    const raceSelect = $("#race")   
    raceSelect.on('change',function(event){
        const raceName = $(this).val() 
        console.log(raceName)
    $.ajax({ 
        url: queryURL + "race/",
        type: "GET",
        success: function (result){
            console.log(result)
        },
        error: function(error){
            console.log(error);
        }
    }) 
    })
    //to select languages
    const langSelect = $("#lang")
    langSelect.on('change',function(event){
        const langName = $(this).val() 
        console.log(spellname)
    $.ajax({ 
        url: queryURL + "languages/",
        type: "GET",
        success: function (result){
            console.log(result)
        },
        error: function(error){
            console.log(error);
        }
    }) 
    })

})