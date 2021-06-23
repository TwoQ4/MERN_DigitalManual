import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql21 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Типы соединения</h3><hr/>&nbsp;<div class="markdown-container"><p>Доработаем наш недавний запрос про поиск более низкой цены на товар в другом магазине. Будем искать товар в другом магазине, с ценой хотя бы на 1500 дешевле:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>store_id <span class="token keyword">AS</span> store_id_less<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>price <span class="token keyword">AS</span> price_less
            <p></p><span class="token keyword">FROM</span> product_price pp
            <p></p><span class="token keyword">JOIN</span> product_price ppl
            <p></p><span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>product_id <span class="token operator">=</span> pp<span class="token punctuation">.</span>product_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>store_id <span class="token operator">!=</span> pp<span class="token punctuation">.</span>store_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price <span class="token operator">-</span> <span class="token number">1500</span>
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                    pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                    ppl<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                    ppl<span class="token punctuation">.</span>price</code></pre><p>Запрос вернет всего 2 записи</p><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th><th>store_id_less</th><th>price_less</th></tr></thead><tbody><tr><td>1</td><td>301</td><td>12500.00</td><td>300</td><td>10500.00</td></tr><tr><td>4</td><td>500</td><td>22000.00</td><td>400</td><td>20000.00</td></tr></tbody></table><p>Что делать, если хочется оставить в выборке товары, для которых не нашлось аналогичного более дешевого товара в другом магазине? На помощь приходят так называемые внешние соединения. Существуют следующие типы соединений:</p><ul><li><code>INNER JOIN</code> или просто <code>JOIN</code> - внутреннее соединение. В результате остаются только те строки, для которых нашлось соответствие. До сих пор мы использовали только этот тип соединений.</li><li><code>LEFT JOIN</code> - левое внешнее соединение. Работает как <code>JOIN</code>, но если для строки таблицы, находящейся по левую сторону ключевого слова <code>LEFT JOIN</code>, не нашлось ни одной строки в таблице, находящейся по правую сторону <code>LEFT JOIN</code>, то строка все равно добавляется в результат, а значения столбцов правой таблицы равны <code>null</code>.</li><li><code>RIGHT JOIN</code> - правое внешнее соединение. Работает как <code>JOIN</code>, но если для строки таблицы, находящейся по правую сторону ключевого слова <code>RIGHT JOIN</code>, не нашлось ни одной строки в таблице, находящейся по левую сторону <code>RIGHT JOIN</code>, то строка все равно добавляется в результат, а значения столбцов левой таблицы равны <code>null</code>.</li><li><code>FULL JOIN</code> - полное внешнее соединение. Если для какой-либо из таблиц не нашлось строки в другой таблице, то строка все равно попадает в результат, а значения столбцов другой таблицы равны <code>null</code>.</li><li><code>CROSS JOIN</code> - перекрестное (или декартово) произведение. Каждая строка одной таблицы соединяется с каждой строкой второй таблицы, давая тем самым в результате все возможные сочетания строк двух таблиц. Аналогичного результата можно достичь просто перечислив таблицы в <code>FROM</code> через запятую.</li></ul><p>Перепишем запрос с использованием <code>LEFT JOIN</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                pp<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>store_id <span class="token keyword">AS</span> store_id_less<span class="token punctuation">,</span>
                ppl<span class="token punctuation">.</span>price <span class="token keyword">AS</span> price_less
            <p></p><span class="token keyword">FROM</span> product_price pp
            <p></p><span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span>
                product_price ppl
            <p></p><span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>product_id <span class="token operator">=</span> pp<span class="token punctuation">.</span>product_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>store_id <span class="token operator">!=</span> pp<span class="token punctuation">.</span>store_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price <span class="token operator">-</span> <span class="token number">1500</span>
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
                    pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                    ppl<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
                    ppl<span class="token punctuation">.</span>price</code></pre><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th><th>store_id_less</th><th>price_less</th></tr></thead><tbody><tr><td>1</td><td>300</td><td>10500.00</td><td></td><td></td></tr><tr><td>1</td><td>301</td><td>12500.00</td><td>300</td><td>10500.00</td></tr><tr><td>1</td><td>800</td><td>12000.00</td><td></td><td></td></tr><tr><td>2</td><td>500</td><td>26100.00</td><td></td><td></td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table></div></div>



            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql20" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql22" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql21;
