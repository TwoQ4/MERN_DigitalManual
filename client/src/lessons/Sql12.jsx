import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql12 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>IN</h3><hr/>&nbsp;<div class="markdown-container"><p>Для проверки совпадения хотя бы с одним значением в SQL применяется конструкция <code>IN</code>. Например, для получение информации о магазинах с кодами <code>100</code>, <code>300</code>, <code>500</code> можно выполнить запрос:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> store
            <p></p><span class="token keyword">WHERE</span> store_id <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span></code></pre><table><thead><tr><th>store_id</th><th>name</th><th>site_url</th></tr></thead><tbody><tr><td>100</td><td>Пионер</td><td>pioner.ru</td></tr><tr><td>300</td><td>Адалин</td><td>adalin.ru</td></tr><tr><td>500</td><td>Март</td><td>mart.ru</td></tr></tbody></table><p>В SQL так же представлена противоположная конструкция <code>NOT IN</code>. Выражение</p><pre class="  language-sql"><code class="  language-sql">a <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>значение<span class="token number">1</span><span class="token punctuation">,</span> значение<span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">)</span></code></pre><p>принимает истинное значение, когда <code>a</code> не равно ни одному из перечисленных значений в скобках.</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> store
            <p></p><span class="token keyword">WHERE</span> store_id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span></code></pre><table><thead><tr><th>#</th><th>store_id</th><th>name</th><th>site_url</th></tr></thead><tbody><tr><td>1</td><td>200</td><td>Марс</td><td>mars.ru</td></tr><tr><td>2</td><td>400</td><td>Европа</td><td>evropa.ru</td></tr><tr><td>3</td><td>600</td><td>Umi</td><td></td></tr><tr><td>4</td><td>800</td><td>Универсам</td><td></td></tr><tr><td>5</td><td>900</td><td>Big</td><td>big.ru</td></tr><tr><td>6</td><td>201</td><td>Сатурн</td><td>saturn.ru</td></tr><tr><td>7</td><td>301</td><td>Адалин-family</td><td>adalin-ultra.ru</td></tr><tr><td>8</td><td>302</td><td>Адалин-ultra</td><td></td></tr></tbody></table></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql11" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql13" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql12;
