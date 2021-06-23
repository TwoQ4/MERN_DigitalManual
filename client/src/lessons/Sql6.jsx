import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql6 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Исключение дубликатов</h3><hr/>&nbsp;<div class="markdown-container"><p>Иногда в таблицах встречаются дубликаты, как например имена сотрудников. Для исключения повторяющихся строк, нужно после ключевого слова <code>SELECT</code> написать <code>DISTINCT</code>.</p><p>Чтобы получить список уникальных имен сотрудников, необходимо выполнить запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> first_name
            <p></p><span class="token keyword">FROM</span> employee</code></pre><table><thead><tr><th>first_name</th></tr></thead><tbody><tr><td>Анна</td></tr><tr><td>Лука</td></tr><tr><td>Ольга</td></tr><tr><td>...</td></tr></tbody></table></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql5" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql7" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql6;
