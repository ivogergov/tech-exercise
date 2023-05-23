// Implement long polling here to update the page on changes. Run the script automatically on page load.
const update = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/api/stocks/${loadedStocks}`, true);
    request.onload = () => {
        const data = JSON.parse(request.responseText);
        data.forEach(item => {
            const element = document.querySelector(`[data-symbol="${item.symbolInput}"]`);
            if (element) {
                const price = element.querySelector('.price__hover_lost');
                if (price.innerText === item.quote.lastPrice.toFixed(2)) {
                    return;
                }
                price.innerText = item.quote.lastPrice.toFixed(2);
                element.classList.add('updated');
                setTimeout(() => {
                    element.classList.remove('updated');
                }, 1500);
                // Get subelement with class "price"
                const percentage = element.querySelector('.change-percent');
                const fixPosition = item.quote.change1DayPercent.toFixed(3);
                if(fixPosition > 0) {
                    percentage.classList.remove('negative');
                    percentage.classList.add('positive');
                } else {
                    percentage.classList.remove('positive');
                    percentage.classList.add('negative');
                }
                percentage.innerText =  `${Math.abs(Number(fixPosition))}%`;
            }
        });
    };
    request.send();
}

update();
setInterval(update, 15000);