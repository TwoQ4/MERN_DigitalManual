import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql15 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Сортировка</h3><hr/>&nbsp;<div class="markdown-container"><p>Данные в таблицах базы данных хранятся неупорядоченно. Выполнив один и тот же запрос несколько раз можно получить один и тот же результат, но строки результата будут отсортированы по-разному.</p><p>Для гарантированной сортировки строк нужно в конце <code>SQL</code> запроса добавить предложение <code>ORDER BY</code>. Например, получим информацию о магазинах, отсортированную по названию:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> store_id<span class="token punctuation">,</span> name
            <p></p><span class="token keyword">FROM</span> store
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name</code></pre><table><thead><tr><th>store_id</th><th>name</th></tr></thead><tbody><tr><td>900</td><td>Big</td></tr><tr><td>600</td><td>Umi</td></tr><tr><td>300</td><td>Адалин</td></tr><tr><td>301</td><td>Адалин-family</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p>Чтобы отсортировать в обратном порядке, необходимо после поля для сортировки указать ключевое слово <code>DESC</code> (по умолчанию <code>ASC</code> - по возрастанию). Например отсортируем магазины по названию по убыванию:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> store_id<span class="token punctuation">,</span> name
            <p></p><span class="token keyword">FROM</span> store
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name <span class="token keyword">DESC</span></code></pre><table><thead><tr><th>store_id</th><th>name</th></tr></thead><tbody><tr><td>800</td><td>Универсам</td></tr><tr><td>201</td><td>Сатурн</td></tr><tr><td>100</td><td>Пионер</td></tr><tr><td>500</td><td>Март</td></tr><tr><td>200</td><td>Марс</td></tr><tr><td>...</td><td>...</td></tr></tbody></table><p>Иногда необходимо при сортировке разбить данные на какие-то группы, а потом отсортировать данные уже в рамках каждой группы. Например отсортируем сотрудников по должностям, а в рамках каждой должности по имени:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> employee_id<span class="token punctuation">,</span>
                rank_id<span class="token punctuation">,</span>
                last_name
            <p></p><span class="token keyword">FROM</span> employee
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> rank_id<span class="token punctuation">,</span> last_name</code></pre><table><thead><tr><th>employee_id</th><th>rank_id</th><th>last_name</th></tr></thead><tbody><tr><td>8</td><td>CEO</td><td>Корсаков</td></tr><tr><td>7</td><td>CHIEF</td><td>Вершинина</td></tr><tr><td>1</td><td>CHIEF</td><td>Иванов</td></tr><tr><td>2</td><td>CHIEF</td><td>Маккормик</td></tr><tr><td>3</td><td>CHIEF</td><td>Матвеева</td></tr></tbody></table><p>В общем случае столбцов для сортировки может быть сколько угодно.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql14" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql16" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql15;
