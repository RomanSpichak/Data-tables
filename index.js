
function DataTable(config, data) {
    const parent = document.querySelector(config.parent);
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const headRow = document.createElement('tr');

    const numberTh = document.createElement('th');
    numberTh.textContent = '#';
    headRow.appendChild(numberTh);

    config.columns.forEach(column => {
        const th = document.createElement('th');
        th.textContent = column.title;
        headRow.appendChild(th);
    });

    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach((item, index) => {
        const row = document.createElement('tr');

        const numberTd = document.createElement('td');
        numberTd.textContent = index + 1;
        row.appendChild(numberTd);

        config.columns.forEach(column => {
            const td = document.createElement('td');
            td.textContent = item[column.value] || '';
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    parent.appendChild(table);
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім’я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
    {id: 30052, name: 'Рома', surname: 'Романов', age: 25},
    {id: 30053, name: 'Сергей', surname: 'Сергеев', age: 30},
];

DataTable(config1, users);