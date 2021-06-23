import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql17 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Псевдонимы таблиц</h3><hr/>&nbsp;<div class="markdown-container"><p>В условиях соединения <code>ON</code> имя таблицы обычно не пишут, т.к. читать длинные портянки кода весьма утомительно. Подобно псевдонимам столбцов в списке выборки <code>SELECT</code> можно задать псевдонимы таблицам. Для этого после названия таблицы через пробел нужно написать псевдоним таблицы. После того, как таблице назначен псевдоним, обращаться к ней по названию уже нельзя - только по псевдониму.</p><p>Перепишем запрос из предыдущей статьи с использованием псевдонимов для таблиц. Было:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> city
            <p></p><span class="token keyword">JOIN</span> timezone
            <p></p><span class="token keyword">ON</span> timezone<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> city<span class="token punctuation">.</span>timezone_id</code></pre><p>стало:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> city c
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>Часто таблицам задают псевдонимы по первым буквам слов, входящих в название таблицы:</p><pre><code>city - c
            category - c
            product - p
            store_address - sa
            product_price - pp</code></pre><p>Алиасы таблиц также удобно использовать в списке выборки <code>SELECT</code>. Выберем, например, из таблиц городов и часовых поясов только идентификатор города, название города и время относительно UTC:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>city_id<span class="token punctuation">,</span>
                c<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>time_offset
            <p></p><span class="token keyword">FROM</span> city c
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>Если поле встречается только в одной таблице, то в списке выборки таблицу, из которой взять столбец, указывать не обязательно. Последний запрос можно записать и так:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>city_id<span class="token punctuation">,</span>
                name<span class="token punctuation">,</span>
                time_offset
            <p></p><span class="token keyword">FROM</span> city c
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>Но мы рекомендуем всегда указывать в списке выборки из какой таблицы какое поле берется. При таком подходе читающий запрос человек сразу поймет из какой таблицы берутся данные. Да и никто не гарантирует, что столбец с таким же названием не появится в другой таблице позже.</p><p>Если столбец с одинаковым названием встречается в нескольких таблицах из <code>FROM</code>, то при использовании его без указания таблицы возникнет ошибка. Например, при выполнениии запроса</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>city_id<span class="token punctuation">,</span>
                name<span class="token punctuation">,</span>
                timezone_id<span class="token punctuation">,</span>
                time_offset
            <p></p><span class="token keyword">FROM</span> city c
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id</code></pre><p>возникнет ошибка</p><pre><code>column reference "timezone_id" is ambiguous</code></pre><p>потому что СУБД не знает, из какой таблицы ей взять значение поля <code>timezone_id</code>.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql16" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql18" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql17;
