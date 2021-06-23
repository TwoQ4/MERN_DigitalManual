import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql7 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Выражение WHERE</h3><hr/>&nbsp;<div class="markdown-container"><p>Зачастую нужны не все строки из таблицы, а какая-то их часть.
            Для ограничения количества возвращаемых строк в SQL существует предложение <code>WHERE</code>. В <code>WHERE</code> указывается логическое выражение, которое служит фильтром строк: в результате остаются только те строки, для которых это выражение истинно.</p><p>Общий синтаксис SQL запроса с предложением <code>WHERE</code>:</p><pre class="  language-sql"><code class="  language-sql"> <span class="token keyword">SELECT</span> список_полей
            <p></p><span class="token keyword">FROM</span> список_таблиц
            <p></p><span class="token keyword">WHERE</span> ограничения_на_список_строк</code></pre><p>Например, для получения всех сотрудников с фамилией Медведев нужно выполнить запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> employee
            <p></p><span class="token keyword">WHERE</span> last_name <span class="token operator">=</span> <span class="token string">'Медведев'</span></code></pre></div></div>   

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql6" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql8" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql7;
