import data from './sample.json' assert { type: "json" };
;
function Func() {
    fetch(".\\sample.json")
        .then((res) => {
        return res.json();
    })
    .then((data) => console.log(data));
}

function Func2() {

    /** 
     * name
     * distance
     * moving_time in seconds
     * type
     * if not swim display: total_elevation_gain
     * start_date_local
    */
    let name = data[0]["name"];
    let distance = data[0]["distance"];
    let move_time = data[0]["moving_time"];
    let type = data[0]["type"];
    let elevation = data[0]["total_elevation_gain"];
    let start_time = data[0]["start_date_local"];
    
    return name, distance, move_time, type, elevation,start_time;
}

Func2()

export default Func2