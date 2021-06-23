import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql9 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Порядок условий</h3><hr/>&nbsp;<div class="markdown-container"><p>При составлении условия <code>WHERE</code> важно учитывать порядок выполнения условий. А выполняются они в следующем порядке:</p><ol><li><code>NOT</code></li><li><code>AND</code></li><li><code>OR</code></li></ol><p>Рассмотрим пример. Необходимо получить информацию о продуктах магазинов с кодами <code>300</code> и <code>302</code>, стоимость которых превышает 20000.</p><p>Для начала получим информацию о продуктах магазинов с кодами <code>300</code> и <code>302</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> store_id <span class="token operator">=</span> <span class="token number">300</span>
                <p></p><span class="token operator">OR</span> store_id <span class="token operator">=</span> <span class="token number">302</span></code></pre><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>300</td><td>10500.00</td></tr><tr><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table><p>А в результате мы хотим получить следующие данные:</p><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table><p>Для достижения необходимого результата необходимо добавить только условие на стоимость. Здесь многие ошибаются, не учитывая приоритеты выполнения операций:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> store_id <span class="token operator">=</span> <span class="token number">300</span>
            <p></p><span class="token operator">OR</span> store_id <span class="token operator">=</span> <span class="token number">302</span>
            <p></p><span class="token operator">AND</span> price <span class="token operator">&gt;</span> <span class="token number">20000</span></code></pre><p>В результате выполнения запроса получим неверные данные:</p><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>300</td><td>10500.00</td></tr><tr><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table><p>Данный результат получился следующим образом:</p><ol><li><code>AND</code> более приоритетаная операция, поэтому сначало выполнилось условие <code>store_id = 302 AND price &gt; 20000</code>;</li><li>затем срабатывает условие <code>OR</code></li></ol><p>Для изменения порядка выполнения необходимо воспользоваться скобками:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> <span class="token punctuation">(</span>store_id <span class="token operator">=</span> <span class="token number">300</span>
            <p></p><span class="token operator">OR</span> store_id <span class="token operator">=</span> <span class="token number">302</span><span class="token punctuation">)</span>
            <p></p><span class="token operator">AND</span> price <span class="token operator">&gt;</span> <span class="token number">20000</span></code></pre><table><thead><tr><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql8" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql10" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql9;
