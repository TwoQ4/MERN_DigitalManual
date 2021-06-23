import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql19 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Несколько условий соединения</h3><hr/>&nbsp;<div class="markdown-container"><p>В условии соединения таблиц можно использовать произвольное количество логических выражений (как в предложении <code>WHERE</code>).</p><p>Например, получим информацию о должностях произвольных 5-ти сотрудников:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> e<span class="token punctuation">.</span>first_name<span class="token punctuation">,</span>
                e<span class="token punctuation">.</span>last_name<span class="token punctuation">,</span>
                r<span class="token punctuation">.</span>rank_id<span class="token punctuation">,</span>
                r<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                r<span class="token punctuation">.</span>name <span class="token keyword">as</span> rank_name
            <p></p><span class="token keyword">FROM</span> employee e
            <p></p><span class="token keyword">JOIN</span> rank r
            <p></p><span class="token keyword">ON</span> r<span class="token punctuation">.</span>rank_id <span class="token operator">=</span> e<span class="token punctuation">.</span>rank_id
            <p></p><span class="token operator">AND</span> r<span class="token punctuation">.</span>store_id <span class="token operator">=</span> e<span class="token punctuation">.</span>store_id
            <p></p><span class="token keyword">LIMIT</span> <span class="token number">5</span></code></pre><table><thead><tr><th>first_name</th><th>last_name</th><th>rank_id</th><th style="text-align:right">store_id</th><th>rank_name</th></tr></thead><tbody><tr><td>Алексей</td><td>Иванов</td><td>CHIEF</td><td style="text-align:right">100</td><td>Директор</td></tr><tr><td>Любовь</td><td>Блинова</td><td>SELLER</td><td style="text-align:right">100</td><td>Продавец</td></tr><tr><td>Глеб</td><td>Тарасов</td><td>MANAGER</td><td style="text-align:right">100</td><td>Менеджер</td></tr><tr><td>Петр</td><td>Корсаков</td><td>CEO</td><td style="text-align:right">201</td><td>Директор</td></tr><tr><td>Никки</td><td>Зайцева</td><td>MANAGER</td><td style="text-align:right">201</td><td>Менеджер</td></tr></tbody></table><p>Обрати внимание на условие соединения таблиц <code>employee e</code> и <code>rank r</code></p><pre class="  language-sql"><code class="  language-sql">    <span class="token keyword">ON</span> r<span class="token punctuation">.</span>rank_id <span class="token operator">=</span> e<span class="token punctuation">.</span>rank_id
            <p></p><span class="token operator">AND</span> r<span class="token punctuation">.</span>store_id <span class="token operator">=</span> e<span class="token punctuation">.</span>store_id</code></pre><p>Почему мы использовали два столбца? Ответ на вопрос можно найти в описании таблицы <code>rank</code>:</p><blockquote><p>В каждом магазине своя иерархия сотрудников. ... Запись в rank идентифицируется составным суррогатным ключом (store_id, rank_id). </p></blockquote><p>Т.е. чтобы найти информацию о должности сотрудника, нужно из таблицы <code>rank</code> взять строку с таким же идентификатором магазина и идентификатором должности в магазине.</p><p>В условии соединения могут использоваться и другие логические операторы:</p><ul><li><code>AND</code> - логическое И;</li><li><code>OR</code> - логическое ИЛИ;</li><li><code>NOT</code> - отрицание.</li></ul></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql18" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql20" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql19;
