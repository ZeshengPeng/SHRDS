var EventSpecificView = function () {

    this.render = function () {
        var header = "";
        if (app.SHRFlag == 2) {
            header = "Event specific SHR";
        } else {
            header = "Event specific Incident Report";
        }


        var body =

            "<div id='bigBlock'>" +
            "<div class='irTitles'>Arena:</div>" +
            "<select name='ESArena'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value=''>Arena 1</option>" +
            "<option value=''>Arena 2</option>" +
            "<option value=''>Arena 3</option>" +
            "<option value=''>Arena 4</option>" +
            "<option value=''>Arena 5</option>" +
            "<option value=''>Arena 6</option>" +
            "<option value=''>Arena 7</option>" +
            "<option value=''>Arena 8</option>" +
            "<option value=''>Arena 9</option>" +
            "<option value=''>Arena 10</option>" +
            "</select>" +

            "<div class='irTitles'>Age:</div>" +
            "<select name='ESAge'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='Under 13'>Under 13</option>" +
            "<option value='Under 14'>Under 14</option>" +
            "<option value='Under 15'>Under 15</option>" +
            "<option value='Under 17'>Under 17</option>" +
            "<option value='Under 19'>Under 19</option>" +
            "<option value='30-34'>30-34</option>" +
            "<option value='35-39'>35-39</option>" +
            "<option value='40-44'>40-44</option>" +
            "<option value='45-49'>45-49</option>" +
            "<option value='50-54'>50-54</option>" +
            "<option value='55-59'>55-59</option>" +
            "<option value='60-64'>60-64</option>" +
            "<option value='65-69'>65-69</option>" +
            "<option value='70+'>70+</option>" +
            "<option value='open'>Open</option>" +
            "</select>" +
			
			
            "<div class='irTitles'>Final:</div>" +
            "<select name='ESFinalType' onChange='updateForm()'>" +
            "<option value='-1'selected>Select one</option>" +
            "<option value='Qualifier'>Qualifier</option>" +
            "<option value='Quater Final'>Quater Final</option>" +
            "<option value='Semi Final'>Semi Final</option>" +
            "<option value='Grand Final'>Grand Final</option>" +
            "</select>" +

			"<div class='removal'>"+
			"<div class='irTitles'>Heat:</div>" +
            "<select name='ESHeat'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='1'>Heat 1</option>" +
            "<option value='2'>Heat 2</option>" +
            "<option value='3'>Heat 3</option>" +
            "<option value='4'>Heat 4</option>" +
            "<option value='5'>Heat 5</option>" +
            "</select>" +
			
            "<div class='irTitles'>Round:</div>" +
            "<select name='ESRound'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='1'>Round 1</option>" +
            "<option value='2'>Round 2</option>" +
            "<option value='3'>Round 3</option>" +
            "<option value='4'>Round 4</option>" +
            "<option value='5'>Round 5</option>" +
            "</select>" +
			"</div>"+
			
			
            "<div class='irTitles'>Craft Type:</div>" +
            "<select name='ESCraftType'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='Ski'>Ski</option>" +
            "<option value='Double Ski'>Double Ski</option>" +
            "<option value='Board'>Board</option>" +
            "<option value='Boat'>Boat</option>" +
			"<option value='N/A'>N/A</option>" +
            "</select>" +
			
			"<div class='irTitles'>Gender:</div>" +
            "<select name='ESGender'>" +
            "<option value='-1' selected>Select one</option>" +
            "<option value='Male'>Male</option>" +
            "<option value='Female'>Female</option>" +
            "</select>" +

            "<div class='check'><div class='irTitles'>In/Out:</div></div>" +
            "<div class='inlineOutIn'></div>" +
            "<div>" +
            "<br>Beach/location:<input type = 'text' name='ESBeach'>" +
            "</div>"+
			"<div class='error'></div>";





        var footer =
            "<button type='submit' class='blueButtons' onclick='getESValues()'>Next</button> " +
            "<button type='button' class='exitButton'>EXIT</button>";


        $(".heading").text(header);
        $(".body").html(body);
        $(".footer").html(footer);
		
		 if (app.SHRFlag == 2) {
		 
           $(".inlineOutIn").html("<input type ='radio' name='ESInOut' id='in' value='IN'/>" +
            "Out" +
            "<input type ='radio' name='ESInOut' id='out' value='OUT'/>" +
            "In");
        } else {
		  $(".check").text("");
		}
	}
}


function routeIS() {
    if (app.SHRFlag == 0) {
        window.location.hash = "#incident1";
    } else {
        window.location.hash = "#WHR";
    }
}

