import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql3 = () => {
    return (
        <div className="lesson">
        
        <div class="article-content">
            <h3>Вызов функции</h3><hr />&nbsp;<div class="markdown-container"><p>В запросах допускается вызывать функции. Например, чтобы получить текущее время на сервере, можно вызвать функцию <code>now()</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre><p>Иногда требуется приведение строки в верхний регистр, для этого используют функцию <code>upper</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> upper<span class="token punctuation">(</span><span class="token string">'elephant'</span><span class="token punctuation">)</span></code></pre><p>Для вызова функции необходимо указать ее имя и перечислить список параметров в скобках через запятую:</p><pre class="  language-sql"><code class="  language-sql">имя_функции<span class="token punctuation">(</span>выражение<span class="token number">1</span><span class="token punctuation">,</span> выражение<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span></code></pre><p>Параметром функции может выступать значение столбца таблицы, строковый литерал, константа, вызов функции и любое выражение над всем вышеперечисленным.</p><p>В PostgreSQL огромное количество встроенных функций, подробнее с которыми можно ознакомиться <a href="https://postgrespro.ru/docs/postgresql/11/functions">здесь</a>. Помимо встроенных функций пользователь может реализовать и свои собственные.</p></div></div>

            &nbsp;<hr />
            <div className="lesson-nav">
                <NavLink to="/sql2" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql4" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>

        </div>
    );
}

export default Sql3;
