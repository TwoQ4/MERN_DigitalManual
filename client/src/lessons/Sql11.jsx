import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql11 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>BETWEEN</h3><hr/>&nbsp;<div class="markdown-container"><p>Для числовых данных типичной задачей является проверка попадания в диапазон значений.
            Например, для получения продуктов со стоимостью от 30000 до 60000 можно написать запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> <span class="token number">30000</span> <span class="token operator">&lt;=</span> price
            <p></p><span class="token operator">AND</span> price <span class="token operator">&lt;=</span> <span class="token number">60000</span></code></pre><table><thead><tr><th>#</th><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>8</td><td>400</td><td>37000.00</td></tr><tr><td>2</td><td>8</td><td>600</td><td>38200.00</td></tr><tr><td>3</td><td>9</td><td>600</td><td>43800.00</td></tr><tr><td>4</td><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>5</td><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table><p>А можно воспользоваться конструкцией <code>BETWEEN</code>, которая дает в точности такой же результат:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> price <span class="token operator">BETWEEN</span> <span class="token number">30000</span> <span class="token operator">AND</span> <span class="token number">60000</span></code></pre><table><thead><tr><th>#</th><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>8</td><td>400</td><td>37000.00</td></tr><tr><td>2</td><td>8</td><td>600</td><td>38200.00</td></tr><tr><td>3</td><td>9</td><td>600</td><td>43800.00</td></tr><tr><td>4</td><td>8</td><td>302</td><td>38300.00</td></tr><tr><td>5</td><td>9</td><td>302</td><td>44500.00</td></tr></tbody></table><p>Следует учитывать, что <code>BETWEEN</code> включает границы в интервал.</p><h3><code>NOT BETWEEN</code></h3><p><code>NOT BETWEEN</code> выполняет противоположное сравнение. Так запрос</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> price <span class="token operator">NOT</span> <span class="token operator">BETWEEN</span> <span class="token number">30000</span> <span class="token operator">AND</span> <span class="token number">60000</span></code></pre><table><thead><tr><th>#</th><th>product_id</th><th>store_id</th><th>price</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>300</td><td>10500.00</td></tr><tr><td>2</td><td>10</td><td>400</td><td>75600.00</td></tr><tr><td>3</td><td>4</td><td>400</td><td>20000.00</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>эквивалентен запросу</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> product_price
            <p></p><span class="token keyword">WHERE</span> price <span class="token operator">&lt;</span> <span class="token number">30000</span>
            <p></p><span class="token operator">OR</span> price <span class="token operator">&gt;</span> <span class="token number">60000</span></code></pre></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql10" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql12" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql11;
