import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql4 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3 class="article-name">Конкатенация строк</h3><hr/>&nbsp;<div class="markdown-container"><p>Часто в запросах приходится объединять несколько значений в одно текстовое значение (конкатенация). Например, может потребоваться получить строку следующего формата: 'текущее время: 2019-02-19 15:28:44.049702+07'. Для выполнения конкатенации строк необходимо воспользоваться оператором <code>||</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token string">'текущее время: '</span> <span class="token operator">||</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">time</span></code></pre><table><thead><tr><th>time</th></tr></thead><tbody><tr><td>текущее время: 2019-02-20 17:49:35.767265+07</td></tr></tbody></table><p>Либо функцией <code>concat</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> concat<span class="token punctuation">(</span><span class="token string">'текущее время: '</span><span class="token punctuation">,</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token keyword">time</span></code></pre><table><thead><tr><th>time</th></tr></thead><tbody><tr><td>текущее время: 2019-02-20 17:49:35.767265+07</td></tr></tbody></table><p>Конкатенировать можно произвольное количество значений.
            Оператором <code>||</code></p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token string">'один, '</span> <span class="token operator">||</span> <span class="token string">'два, '</span> <span class="token operator">||</span> <span class="token string">'три'</span> <span class="token keyword">as</span> result</code></pre><table><thead><tr><th>result</th></tr></thead><tbody><tr><td>один, два, три</td></tr></tbody></table><p>Функцией <code>concat</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> concat<span class="token punctuation">(</span><span class="token string">'один, '</span><span class="token punctuation">,</span> <span class="token string">'два, '</span><span class="token punctuation">,</span> <span class="token string">'три'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> result</code></pre><table><thead><tr><th>result</th></tr></thead><tbody><tr><td>один, два, три</td></tr></tbody></table></div></div>

            <div className="lesson-nav">
                <NavLink to="/sql3" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql5" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql4;
