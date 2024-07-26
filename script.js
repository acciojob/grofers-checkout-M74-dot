// Create and append the "Get Total Price" button
const getSumBtn = document.createElement("button");
getSumBtn.textContent = "Get Total Price";
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all the price cells
    const priceCells = document.querySelectorAll('.price');
    let total = 0;

    // Sum up the values from each price cell
    priceCells.forEach(cell => {
        total += parseFloat(cell.textContent);
    });

    // Create a new row for the total price
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: ${total} Rs`;
    totalCell.style.fontWeight = 'bold'; // Optional styling for emphasis
    totalCell.style.textAlign = 'center'; // Optional styling for center alignment
    totalRow.appendChild(totalCell);

    // Append the new row to the table
    const table = document.querySelector('table');
    table.appendChild(totalRow);
};

// Add event listener to the button
getSumBtn.addEventListener("click", getSum);
