import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql23 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>FULL JOIN</h3><hr/>&nbsp;<div class="markdown-container"><p><code>FULL JOIN</code> - полное внешнее соединение. Если для какой-либо из таблиц не нашлось строки в другой таблице, то строка все равно попадает в результат, а значения столбцов другой таблицы равны <code>null</code>.</p><p>Рассмотрим как работает <code>FULL JOIN</code> на примере. Пусть у нас есть две таблицы:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> table1</code></pre><table><thead><tr><th>id</th><th>value</th></tr></thead><tbody><tr><td>1</td><td>One</td></tr><tr><td>2</td><td>Two</td></tr><tr><td>3</td><td>Three</td></tr></tbody></table><p>и</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> table2</code></pre><table><thead><tr><th>id</th><th>value</th></tr></thead><tbody><tr><td>2</td><td>Two</td></tr><tr><td>3</td><td>Three</td></tr><tr><td>4</td><td>Four</td></tr><tr><td>5</td><td>Five</td></tr></tbody></table><p>На этих данных выполним запрос</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> t1<span class="token punctuation">.</span>id <span class="token keyword">as</span> id_1<span class="token punctuation">,</span>
                t1<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_1<span class="token punctuation">,</span>
                t2<span class="token punctuation">.</span>id <span class="token keyword">as</span> id_2<span class="token punctuation">,</span>
                t2<span class="token punctuation">.</span><span class="token keyword">value</span> <span class="token keyword">as</span> value_2
            <p></p><span class="token keyword">FROM</span> table1 t1
            <p></p><span class="token keyword">FULL</span> <span class="token keyword">JOIN</span> 
                table2 t2
            <p></p><span class="token keyword">ON</span> t1<span class="token punctuation">.</span>id <span class="token operator">=</span> t2<span class="token punctuation">.</span>id
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> t1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> t2<span class="token punctuation">.</span>id</code></pre><table><thead><tr><th>id_1</th><th>value_1</th><th>id_2</th><th>value_2</th></tr></thead><tbody><tr><td>1</td><td>One</td><td></td><td></td></tr><tr><td>2</td><td>Two</td><td>2</td><td>Two</td></tr><tr><td>3</td><td>Three</td><td>3</td><td>Three</td></tr><tr><td></td><td></td><td>4</td><td>Four</td></tr><tr><td></td><td></td><td>5</td><td>Five</td></tr></tbody></table><p>Однако, в реализации <code>FULL JOIN</code> в PostgreSQL есть дефект. Например, если в условии соединения не будет условий на равенство столбцов таблиц (<code>=</code>), или встретится <code>OR</code>, то во время выполнения запроса возникнет ошибка:</p><pre><code>FULL JOIN is only supported with merge-joinable or hash-joinable join conditions</code></pre><p>Попробуй выполнить следующий запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price pp
            <p></p><span class="token keyword">FULL</span> <span class="token keyword">JOIN</span>
                product_price ppl
            <p></p><span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price</code></pre><p>Подробнее о дефекте можно почитать <a href="https://postgrespro.com/list/thread-id/1230535">здесь</a>.</p></div></div>


            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql22" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sq24" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql23;
