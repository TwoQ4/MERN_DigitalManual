import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql4 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Синтаксис через WHERE</h3><hr/>&nbsp;<div class="markdown-container"><p>Внутреннее соединение можно выполнить не используя ключевое слово <code>JOIN</code>. Для этого достаточно сделать декартово произведение строк таблиц, а условия соединения прописать в предложении <code>WHERE</code>. Например, соединим таблицы городов и часовых поясов:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>name <span class="token keyword">AS</span> city_name<span class="token punctuation">,</span>
                c<span class="token punctuation">.</span>timezone_id <span class="token keyword">AS</span> timezone_id_city<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>timezone_id <span class="token keyword">AS</span> timezone_id_timezone<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>time_offset
            <p></p><span class="token keyword">FROM</span> city c<span class="token punctuation">,</span>
                timezone t
            <p></p><span class="token keyword">WHERE</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> c<span class="token punctuation">.</span>name<span class="token punctuation">,</span> t<span class="token punctuation">.</span>timezone_id</code></pre><table><thead><tr><th>city_name</th><th>timezone_id_city</th><th>timezone_id_timezone</th><th>time_offset</th></tr></thead><tbody><tr><td>Барнаул</td><td>5</td><td>5</td><td>UTC+6</td></tr><tr><td>Владивосток</td><td>8</td><td>8</td><td>UTC+10</td></tr><tr><td>Иркутск</td><td>7</td><td>7</td><td>UTC+8</td></tr><tr><td>Калининград</td><td>1</td><td>1</td><td>UTC+2</td></tr><tr><td>Кемерово</td><td>6</td><td>6</td><td>UTC+7</td></tr></tbody></table><p>Такая форма соединения таблиц не отличается от соединения через <code>JOIN</code> по производительности, но удобнее в запросах с большим количеством таблиц. Сравни:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> r<span class="token punctuation">.</span>name <span class="token keyword">AS</span> rank_name<span class="token punctuation">,</span>
                s<span class="token punctuation">.</span>name <span class="token keyword">AS</span> store_name<span class="token punctuation">,</span>
                c<span class="token punctuation">.</span>name <span class="token keyword">as</span> city_name<span class="token punctuation">,</span>
                sa<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>time_offset
            <p></p><span class="token keyword">FROM</span> rank r
            <p></p><span class="token keyword">JOIN</span> store s
            <p></p><span class="token keyword">ON</span> s<span class="token punctuation">.</span>store_id <span class="token operator">=</span> r<span class="token punctuation">.</span>store_id
            <p></p><span class="token keyword">JOIN</span> store_address sa
            <p></p><span class="token keyword">ON</span> sa<span class="token punctuation">.</span>store_id <span class="token operator">=</span> s<span class="token punctuation">.</span>store_id
            <p></p><span class="token keyword">JOIN</span> city c
            <p></p><span class="token keyword">ON</span> c<span class="token punctuation">.</span>city_id <span class="token operator">=</span> sa<span class="token punctuation">.</span>city_id
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>и</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> r<span class="token punctuation">.</span>name <span class="token keyword">AS</span> rank_name<span class="token punctuation">,</span>
                s<span class="token punctuation">.</span>name <span class="token keyword">AS</span> store_name<span class="token punctuation">,</span>
                c<span class="token punctuation">.</span>name <span class="token keyword">as</span> city_name<span class="token punctuation">,</span>
                sa<span class="token punctuation">.</span>address<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>time_offset
            <p></p><span class="token keyword">FROM</span> rank r<span class="token punctuation">,</span>
                store s<span class="token punctuation">,</span>
                store_address sa<span class="token punctuation">,</span>
                city c<span class="token punctuation">,</span>
                timezone t
            <p></p><span class="token keyword">WHERE</span> s<span class="token punctuation">.</span>store_id <span class="token operator">=</span> r<span class="token punctuation">.</span>store_id
            <p></p><span class="token operator">AND</span> sa<span class="token punctuation">.</span>store_id <span class="token operator">=</span> s<span class="token punctuation">.</span>store_id
            <p></p><span class="token operator">AND</span> c<span class="token punctuation">.</span>city_id <span class="token operator">=</span> sa<span class="token punctuation">.</span>city_id
            <p></p><span class="token operator">AND</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>Нам больше нравится второй вариант, т.к. запрос получается менее загруженным ключевыми словами и лучше видно из каких таблиц выбираются данные. Есть и обратная сторона - условия соединения отделены от таблиц. Но эта проблема становится не такой актуальной при одинаковом порядке таблиц в <code>FROM</code> и условий в <code>WHERE</code>.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql24" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
            </div>
        </div>
    );
}

export default Sql4;
