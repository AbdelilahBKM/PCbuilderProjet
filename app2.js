// price-ranges page

var components = [];
fetch("./component.json").then((res) => res.json()).then((data) => {
    components = data;
    const price_ranges = document.querySelectorAll('.price-range');
    price_ranges.forEach((price_range) => {
        price_range.addEventListener('click', () => {
            let spec = price_range.getAttribute('data-spec');
            let suggested_built = suggestion(spec);
            // show results
            const cmps = document.querySelectorAll('.cmp');
            cmps.forEach((cmp) => {
                if (suggested_built[cmp.id] != null) {
                    cmp.querySelector('.cmp-name').innerHTML = suggested_built[cmp.id].name;
                    cmp.querySelector('.cmp-price').innerHTML = suggested_built[cmp.id].price + '$';
                } else {
                    cmp.querySelector('.cmp-name').innerHTML = 'no GPU';
                    cmp.querySelector('.cmp-price').innerHTML = '0$';
                }
            });
            const img = document.querySelector('.image img');
            img.src = suggested_built.case.picture;
        });
    });
}).catch(err => console.log(err));

function show_suggestion(sugg) {
    if (sugg == null) {
        return;
    }

}

function suggestion(spec) {

    if (spec === 'min1') { // min build with no GPU
        return {
            "cpu": components.cpu[0],
            "gpu": null,
            "motherboard": components.motherboard[0],
            "ram": components.ram[0],
            "ssd": components.ssd[0],
            "hdd": components.hdd[0],
            "psu": components.psu[0],
            "case": components.case[0]
        };
    } else if (spec === 'min2') { // min build with GPU
        return {
            "cpu": components.cpu[0],
            "gpu": components.gpu[0],
            "motherboard": components.motherboard[0],
            "ram": components.ram[0],
            "ssd": components.ssd[0],
            "hdd": components.hdd[0],
            "psu": components.psu[0],
            "case": components.case[0]
        };
    } else if (spec === 'mid1') { // middle build 1
        return {
            "cpu": components.cpu[1],
            "gpu": components.gpu[1],
            "motherboard": components.motherboard[1],
            "ram": components.ram[1],
            "ssd": components.ssd[1],
            "hdd": components.hdd[1],
            "psu": components.psu[1],
            "case": components.case[1]
        };
    } else if (spec === 'mid2') { // middle build 2
        return {
            "cpu": components.cpu[1],
            "gpu": components.gpu[2],
            "motherboard": components.motherboard[1],
            "ram": components.ram[1],
            "ssd": components.ssd[1],
            "hdd": components.hdd[1],
            "psu": components.psu[1],
            "case": components.case[1]
        };
    } else if (spec === 'max') { // max build
        return {
            "cpu": components.cpu[2],
            "gpu": components.gpu[3],
            "motherboard": components.motherboard[2],
            "ram": components.ram[2],
            "ssd": components.ssd[1],
            "hdd": components.hdd[1],
            "psu": components.psu[2],
            "case": components.case[2]
        };
    } else { // NO BUILD
        return null;
    }
}
