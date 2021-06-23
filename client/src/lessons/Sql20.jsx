import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql20 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Использование таблицы несколько раз</h3><hr/>&nbsp;<div class="markdown-container"><p>Если одну и ту же таблицу необходимо использовать в запросе несколько раз, то необходимо воспользоваться псевдонимами для таблиц. Например, для каждой стоимости товара в магазине найдем предложение на такой же товар в другом магазине по меньшей цене:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>price<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>store_id <span class="token keyword">AS</span> store_id_less<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>price <span class="token keyword">AS</span> price_less
            <p></p><span class="token keyword">FROM</span> product_price pp
            <p></p><span class="token keyword">JOIN</span> product_price ppl
            <p></p><span class="token keyword">ON</span> ppl<span class="token punctuation">.</span>product_id <span class="token operator">=</span> pp<span class="token punctuation">.</span>product_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>store_id <span class="token operator">!=</span> pp<span class="token punctuation">.</span>store_id
            <p></p><span class="token operator">AND</span> ppl<span class="token punctuation">.</span>price <span class="token operator">&lt;</span> pp<span class="token punctuation">.</span>price
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> pp<span class="token punctuation">.</span>product_id<span class="token punctuation">,</span>
            pp<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>store_id<span class="token punctuation">,</span>
            ppl<span class="token punctuation">.</span>price</code></pre><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th><th>store_id_less</th><th>price_less</th></tr></thead><tbody><tr><td>1</td><td>301</td><td>12500.00</td><td>300</td><td>10500.00</td></tr><tr><td>1</td><td>301</td><td>12500.00</td><td>800</td><td>12000.00</td></tr><tr><td>1</td><td>800</td><td>12000.00</td><td>300</td><td>10500.00</td></tr><tr><td>2</td><td>600</td><td>27500.00</td><td>500</td><td>26100.00</td></tr><tr><td>3</td><td>201</td><td>22900.00</td><td>500</td><td>22000.00</td></tr><tr><td>3</td><td>201</td><td>22900.00</td><td>800</td><td>22100.00</td></tr><tr><td>3</td><td>800</td><td>22100.00</td><td>500</td><td>22000.00</td></tr></tbody></table><p>Разберемся, как это работает:</p><ol><li>Берутся все строки из таблицы <code>product_price</code>. Дальнейшее обращение к этому набору строк происходит через <code>pp</code>.</li><li>Для каждой строки из пункта 1 просматривается еще раз все строки таблицы <code>product_price</code>. Обращение к строкам последней происходит через <code>ppl</code>.</li><li>Если цена <code>price</code> у строки из второй копии <code>product_price</code> меньше, чем у строки из первой копии <code>product_price</code>, то связка этих строк добавляется в результат выполнения запроса.</li><li>В конце результат сортируется согласно <code>ORDER BY</code>. </li></ol></div></div>


            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql19" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql21" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql20;
