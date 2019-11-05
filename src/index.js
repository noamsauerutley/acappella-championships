document.addEventListener("DOMContentLoaded", () => {

    const dorksTable = document.getElementById("table-body")
    const winner = document.getElementById("winner")

    let fetchDorks = async () => {
        let response = await fetch ("http://localhost:3000/a_cappella_groups")
        let dorks = await response.json()
        dorks.forEach(dork => {
            if (!winner.innerText.includes(dork.name)){
            let dorkRow = document.createElement("tr")
            
            let collegeCell = document.createElement("td")
            collegeCell.innerText = dork.college.name
            dorkRow.appendChild(collegeCell)

            let nameCell = document.createElement("td")
            nameCell.innerText = dork.name
            dorkRow.appendChild(nameCell)

            let membershipCell = document.createElement("td")
            membershipCell.innerText = dork.membership
            dorkRow.appendChild(membershipCell)

            let divisionCell = document.createElement("td")
            divisionCell.innerText = dork.college.division
            dorkRow.appendChild(divisionCell)

            let crownCell = document.createElement("td")
            let crownButton = document.createElement("button")
            crownButton.innerText = "Crown as Winner!"
            crownButton.addEventListener("click", () => {
                console.log(dork.name + " is the WINNER!")
                winner.innerText = `Winner: ${dork.name}`
                let child = dorksTable.lastElementChild
                while (child) { 
                    dorksTable.removeChild(child) 
                    child = dorksTable.lastElementChild 
                } 
                fetchDorks()
            })
            crownCell.appendChild(crownButton)
            dorkRow.appendChild(crownCell)
            dorksTable.appendChild(dorkRow)
            }
        })
    }

    fetchDorks()



})