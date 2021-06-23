import React from 'react';
import {Link} from 'react-router-dom';

const SqlPage = () => {
    return (
        <div className="container">
            <h3>Раздел 1. Введение</h3>
            <hr />
            <div className="collection">
                <Link className="collection-item" to="/sql1">1.1 Синтаксис SQL запроса</Link>
                <Link className="collection-item" to="/sql2">1.2 Получение данных из таблицы</Link>
                <Link className="collection-item" to="/sql3">1.3 Вызов функции</Link>
                <Link className="collection-item" to="/sql4">1.4 Конкатенация строк</Link>
                <Link className="collection-item" to="/sql5">1.5 Арифметические операции</Link>
                <Link className="collection-item" to="/sql6">1.6 Исключение дубликатов</Link>

            </div>

            <h3>Раздел 2. Отсечение строк и сортировка</h3>
            <hr />
            <div className="collection">
                <Link className="collection-item" to="/sql7">2.1 Выражение WHERE</Link>
                <Link className="collection-item" to="/sql8">2.2 Логические операторы</Link>
                <Link className="collection-item" to="/sql9">2.3 Порядок условий</Link>
                <Link className="collection-item" to="/sql10">2.4 Операции сравнения</Link>
                <Link className="collection-item" to="/sql11">2.5 BETWEEN</Link>
                <Link className="collection-item" to="/sql12">2.6 IN</Link>
                <Link className="collection-item" to="/sql13">2.7 Поиск по шаблону</Link>
                <Link className="collection-item" to="/sql14">2.8 Обработка NULL значений</Link>
                <Link className="collection-item" to="/sql15">2.9 Сортировка</Link>
            </div>

            <h3>Раздел 3: Соединения</h3>
            <hr />
            <div className="collection">
                <Link className="collection-item" to="/sql16">3.1 Соединение двух таблиц</Link>
                <Link className="collection-item" to="/sql17">3.2 Псевдонимы таблиц</Link>
                <Link className="collection-item" to="/sql18">3.3 Добавляем WHERE</Link>
                <Link className="collection-item" to="/sql19">3.4 Несколько условий соединения</Link>
                <Link className="collection-item" to="/sql20">3.5 Использование таблицы несколько раз</Link>
                <Link className="collection-item" to="/sql21">3.6 Типы соединения</Link>
                <Link className="collection-item" to="/sql22">3.7 RIGHT JOIN</Link>
                <Link className="collection-item" to="/sql23">3.8 FULL JOIN</Link>
                <Link className="collection-item" to="/sql24">3.9 Декартово произведение</Link>
                <Link className="collection-item" to="/sql25">3.10 Синтаксис через WHERE</Link>
            </div>
        </div>
    );
}

export default SqlPage;
