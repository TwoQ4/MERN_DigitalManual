import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql14 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Обработка NULL значений</h3><hr/>&nbsp;<div class="markdown-container"><p>В языке SQL есть особый тип значений - <code>null</code>. Его используют для обозначения, что значения нет или оно не известно.</p><p><code>null</code> значения вернут себя по-особому в операциях сравнения:</p><ul><li>Одно <code>null</code> значение не равно другому <code>null</code> значению (выражение <code>null = null</code> вернет <code>false</code>).</li><li>Одно <code>null</code> значение не не равно другому <code>null</code> значению (выражение <code>null != null</code> вернет <code>false</code>).</li></ul><p>Чтобы проверить значение на равенство <code>null</code> нужно после значения написать <code>IS NULL</code>. Например, <code>123 is null</code> вернет <code>false</code>, а <code>null IS NULL</code> вернет <code>true</code>.</p><p>Получим все магазины без сайта:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> store
            <p></p><span class="token keyword">WHERE</span> site_url <span class="token operator">IS</span> <span class="token boolean">NULL</span></code></pre><table><thead><tr><th>#</th><th>store_id</th><th>name</th><th>site_url</th></tr></thead><tbody><tr><td>1</td><td>600</td><td>Umi</td><td></td></tr><tr><td>2</td><td>800</td><td>Универсам</td><td></td></tr><tr><td>3</td><td>302</td><td>Адалин-ultra</td><td></td></tr></tbody></table><p>Условие IS NOT NULL используется в запросах для выборки записей со значениями не равных значению NULL. Например, <code>123 IS NOT NULL</code> вернет <code>true</code>, а <code>null IS NOT NULL</code> вернет <code>false</code>.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql13" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql15" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql14;
