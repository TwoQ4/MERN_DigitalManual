import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql1 = () => {
    return (
        <div className="lesson">
            <h3>Синтаксис SQL запроса</h3>
            <hr />
            <p>&nbsp;</p>
            

            <div class="markdown-container"><p>Простейший запрос на языке SQL:</p><pre class="  language-sql"><code class="  language-sql">
            <span class="token keyword">SELECT</span> <span class="token string">'Hello, world!'</span></code></pre><p>В общем виде SQL запрос выглядит следующим образом:</p><pre class="  language-sql"><code class="  language-sql"> <span class="token keyword">SELECT</span> список_полей
            <p>&nbsp;</p>
            <span class="token keyword">FROM</span> список_таблиц</code></pre><p>Хотя на самом деле немного сложнее:</p><pre class="  language-sql"><code class="  language-sql"> <span class="token keyword">SELECT</span> список_полей
            <p>&nbsp;</p>
            <span class="token keyword">FROM</span> список_таблиц
            <p>&nbsp;</p>
            <span class="token keyword">WHERE</span> ограничения_на_список_строк
            <p>&nbsp;</p>
            <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> условия_группировки
            <p>&nbsp;</p>
            <span class="token keyword">HAVING</span> ограничения_на_строки_после_группировки
            <p>&nbsp;</p>
            <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> порядок_сортировки
            <p>&nbsp;</p>
            <span class="token keyword">LIMIT</span> ограничение_количества_записей</code></pre><p>И даже это еще не все... Но обо всем по порядку.</p><p>Если предложение <code>FROM</code> опущено, то оператор <code>SELECT</code> вернет ровно одну строку со значениями, состоящими из констант, строковых литералов, результатов вызовов функций и операций над всем вышеперечисленным.</p><p>В нашем запросе</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token string">'Hello, world!'</span></code></pre><p><code>SELECT</code> - ключевое слово языка SQL, а <code>'Hello, world!'</code> - строковый литерал. В результате выполнения получаем одну строку с одним столбцом со значением <code>'Hello, world!'</code>.</p><p>Для получения нескольких столбцов необходимо перечислить выражения через запятую, например вот так:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token string">'World'</span></code></pre></div>

            <p>&nbsp;</p>
            <hr />
            
            <div className="lesson-nav">
                <NavLink to="/sql2" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        
        </div>
    );
}

export default Sql1;
