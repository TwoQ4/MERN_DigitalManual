import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql24 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Декартово произведение</h3><hr/>&nbsp;<div class="markdown-container"><p><code>CROSS JOIN</code> - перекрестное (или декартово) произведение. Каждая строка одной таблицы соединяется с каждой строкой второй таблицы, давая тем самым в результате все возможные сочетания строк двух таблиц.</p><p>Попробуем декартово произведение на таблицах:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> table1</code></pre><table><thead><tr><th>value</th></tr></thead><tbody><tr><td>1</td></tr><tr><td>2</td></tr></tbody></table><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> table2</code></pre><table><thead><tr><th>value</th></tr></thead><tbody><tr><td>1</td></tr><tr><td>2</td></tr><tr><td>3</td></tr></tbody></table><p>Получим декартово произведение таблиц <code>table1</code> и <code>table2</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> t1<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_1<span class="token punctuation">,</span>
                t2<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_2
            <p></p><span class="token keyword">FROM</span> table1 t1
            <p></p><span class="token keyword">CROSS</span> <span class="token keyword">JOIN</span>
                table2 t2
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> t1<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> t2<span class="token punctuation">.</span><span class="token keyword">value</span></code></pre><table><thead><tr><th>value_1</th><th>value_2</th></tr></thead><tbody><tr><td>1</td><td>1</td></tr><tr><td>1</td><td>2</td></tr><tr><td>1</td><td>3</td></tr><tr><td>2</td><td>1</td></tr><tr><td>2</td><td>2</td></tr><tr><td>2</td><td>3</td></tr></tbody></table><p>Аналогичного результата можно достичь просто перечислив таблицы в предложении <code>FROM</code> через запятую:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> t1<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_1<span class="token punctuation">,</span>
                t2<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_2
            <p></p><span class="token keyword">FROM</span> table1 t1<span class="token punctuation">,</span>
                table2 t2
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> t1<span class="token punctuation">.</span><span class="token keyword">value</span><span class="token punctuation">,</span> t2<span class="token punctuation">.</span><span class="token keyword">value</span></code></pre></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql23" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql25" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql24;
