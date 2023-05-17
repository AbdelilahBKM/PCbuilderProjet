var components = [];
fetch("./component.json").then((res) => res.json()).then((data) => {
    components = data;
    suggestion(components);
}).catch(err => console.log(err));

function suggestion(components) {
    let price_range = 1820;
    if (isNaN(price_range)) {
        console.log("Invalid input");
        return;
    }

    let suggested_build = [];
    if (Number(price_range) >= 470 && Number(price_range) < 570) { // min build with no GPU
        suggested_build = [
            {
                "cpu": components.cpu[0],
                "gpu": null,
                "motherboard": components.motherboard[0],
                "ram": components.ram[0],
                "ssd": components.ssd[0],
                "hdd": components.hdd[0],
                "psu": components.psu[0],
                "case": components.case[0]
            }
        ];

        console.log(suggested_build);
    } else if (Number(price_range) >= 570 && Number(price_range) < 980) { // min build with GPU
        suggested_build = [
            {
                "cpu": components.cpu[0],
                "gpu": components.gpu[0],
                "motherboard": components.motherboard[0],
                "ram": components.ram[0],
                "ssd": components.ssd[0],
                "hdd": components.hdd[0],
                "psu": components.psu[0],
                "case": components.case[0]
            }
        ];
        console.log(suggested_build);
    } else if (Number(price_range) >= 980 && Number(price_range) < 1330) { // middle build 1
        suggested_build = [
            {
                "cpu": components.cpu[1],
                "gpu": components.gpu[1],
                "motherboard": components.motherboard[1],
                "ram": components.ram[1],
                "ssd": components.ssd[1],
                "hdd": components.hdd[1],
                "psu": components.psu[1],
                "case": components.case[1]
            }
        ];
        console.log(suggested_build);
    } else if (Number(price_range) >= 1330 && Number(price_range) < 1820) { // middle build 2
        suggested_build = [
            {
                "cpu": components.cpu[1],
                "gpu": components.gpu[2],
                "motherboard": components.motherboard[1],
                "ram": components.ram[1],
                "ssd": components.ssd[1],
                "hdd": components.hdd[1],
                "psu": components.psu[1],
                "case": components.case[1]
            }
        ];
        console.log(suggested_build);
    } else if (Number(price_range) >= 1820) { // max build
        suggested_build = [
            {
                "cpu": components.cpu[2],
                "gpu": components.gpu[3],
                "motherboard": components.motherboard[2],
                "ram": components.ram[2],
                "ssd": components.ssd[1],
                "hdd": components.hdd[1],
                "psu": components.psu[2],
                "case": components.case[2]
            }
        ];
        console.log(suggested_build);
    } else { // NO BUILD
        console.log("no build for you");
    }
}
