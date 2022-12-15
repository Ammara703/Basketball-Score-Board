let add = 0
let sum = 0
let countEL1 = document.getElementById("count_el1")
let countEL2 = document.getElementById("count_el2")
let leadEL = document.getElementById("lead_el")

function lead() {
    if (add > sum) {
        leadEL.textContent = "lead:home"
    } else if (add < sum) {
        leadEL.textContent = "lead:guest"
    } else {
        leadEL.textContent = "lead:tie"
    }
}


function add1() {
    add += 1
    countEL1.textContent = add
    lead()
}

function add2() {
    add += 2
    countEL1.textContent = add
    lead()
}

function add3() {
    add += 3
    countEL1.textContent = add
    lead()
}

function sum1() {
    sum += 1
    countEL2.textContent = sum
    lead()
}

function sum2() {
    sum += 2
    countEL2.textContent = sum
    lead()
}

function sum3() {
    sum += 3
    countEL2.textContent = sum
    lead()
}

function sub1() {
    add -= 1
    countEL1.textContent = add
    lead()
}

function sub2() {
    add -= 2
    countEL1.textContent = add
    lead()
}

function sub3() {
    add -= 3
    countEL1.textContent = add
    lead()
}

function mins1() {
    sum -= 1
    countEL2.textContent = sum
    lead()
}

function mins2() {
    sum -= 2
    countEL2.textContent = sum
    lead()
}

function mins3() {
    sum -= 3
    countEL2.textContent = sum
    lead()
}