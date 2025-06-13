resultsContainer.innerHTML = cardsArray.map(card => `
    <a href="${card.url}" class="card" style="
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 15px;
        text-decoration: none;
        color: inherit;
        border: 1px solid #ccc;
        border-radius: 8px;
        padding: 12px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
    ">
        <img src="${card.img}" alt="${card.title}" style="
            width: 125px;
            height: 125px;
            object-fit: cover;
            border-radius: 6px;
            flex-shrink: 0;
        ">
        <div style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 1;
        ">
            <h4 style="
                margin: 0;
                font-size: 1.2em;
                font-weight: bold;
                line-height: 1.3;
            ">${card.title}</h4>
            <p style="
                margin: 6px 0 0 0;
                font-size: 1em;
                color: #666;
            ">${card.description}</p>
        </div>
    </a>
`).join('');
