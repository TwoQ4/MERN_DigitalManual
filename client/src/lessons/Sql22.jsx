import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql22 = () => {
    return (
        
        <div className="lesson">

        <div class="article-content"><h3>RIGHT JOIN</h3><hr/>&nbsp;<div class="markdown-container"><p><code>RIGHT JOIN</code> - правое внешнее соединение. Работает как <code>JOIN</code>, но если для строки таблицы, находящейся по правую сторону ключевого слова <code>RIGHT JOIN</code>, не нашлось ни одной строки в таблице, находящейся по левую сторону <code>RIGHT JOIN</code>, то строка все равно добавляется в результат, а значения столбцов левой таблицы равны <code>null</code>.</p><p>Запрос с <code>LEFT JOIN</code></p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>store_id <span class="token keyword">AS</span> store_id_less<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>price <span class="token keyword">AS</span> price_less
        <p></p><span class="token keyword">FROM</span> product_price pp
        <p></p><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span>
            product_price ppl
            <span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>product_id <span class="token operator">=</span> pp<span class="token punctuation">.</span>product_id
        <p></p><p></p><p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>store_id <span class="token operator">!=</span> pp<span class="token punctuation">.</span>store_id
        <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price <span class="token operator">-</span> <span class="token number">1500</span>
        <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>price</code></pre><p>можно легко переписать на <code>RIGHT JOIN</code>, просто поменяв таблицы местами:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>store_id <span class="token keyword">AS</span> store_id_less<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>price <span class="token keyword">AS</span> price_less
        <p></p><span class="token keyword">FROM</span> product_price ppl
        <p></p><span class="token keyword">RIGHT</span> <span class="token keyword">JOIN</span>
            product_price pp
            <span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>product_id <span class="token operator">=</span> pp<span class="token punctuation">.</span>product_id
        <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>store_id <span class="token operator">!=</span> pp<span class="token punctuation">.</span>store_id
        <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price <span class="token operator">-</span> <span class="token number">1500</span>
        <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>price</code></pre><table><thead><tr><th style="text-align:right">product_id</th><th style="text-align:right">store_id</th><th style="text-align:right">price</th><th style="text-align:right">store_id_less</th><th style="text-align:right">price_less</th></tr></thead><tbody><tr><td style="text-align:right">1</td><td style="text-align:right">300</td><td style="text-align:right">10500.00</td><td style="text-align:right"></td><td style="text-align:right"></td></tr><tr><td style="text-align:right">1</td><td style="text-align:right">301</td><td style="text-align:right">12500.00</td><td style="text-align:right">300</td><td style="text-align:right">10500.00</td></tr><tr><td style="text-align:right">1</td><td style="text-align:right">800</td><td style="text-align:right">12000.00</td><td style="text-align:right"></td><td style="text-align:right"></td></tr><tr><td style="text-align:right">2</td><td style="text-align:right">500</td><td style="text-align:right">26100.00</td><td style="text-align:right"></td><td style="text-align:right"></td></tr><tr><td style="text-align:right">...</td><td style="text-align:right">...</td><td style="text-align:right">...</td><td style="text-align:right">...</td><td style="text-align:right">...</td></tr></tbody></table><p>P.S. Мы на практике <code>RIGHT JOIN</code> почти не используем, <code>LEFT JOIN</code> воспринимается в запросах гораздо проще (если в предложении <code>FROM</code> сначала идет основная таблица, от которой строится логика получения остальных данных).</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql21" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql23" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql22;
