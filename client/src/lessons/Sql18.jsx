import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql18 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Добавляем WHERE</h3><hr/>&nbsp;<div class="markdown-container"><p>В дополнение к условиям соединения таблиц можно использовать <code>WHERE</code> для дополнительных ограничений на строки. </p><p>Запрос выполняется следующим образом:</p><ol><li>За результат выполнения запроса берутся все строки из первой таблицы предложения <code>FROM</code></li><li>Для каждой строки из результата выполнения запроса отбираются строки из второй таблицы из <code>FROM</code> по условиям соединения. В результате для каждой строки из первой таблицы в результирующей выборке получается столько строк, сколько строк нашлось во второй таблице по условиям соединения.</li><li>Пункт 2 выполняется для каждой таблицы из предложения <code>FROM</code>.</li><li>Из строк, полученных в пунктах 1 - 3, остаются те, для которых условие в <code>WHERE</code> будет истинно.</li></ol><p>По факту на сервере запрос может выполняться по другому (с оптимизацией, планами запросов, планировщиком будем разбираться в последующих курсах), на текущем этапе нас интересует только логика определения результата запроса.</p><p>Получим информацию городах во временной зоне <code>'UTC+3'</code>:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> c<span class="token punctuation">.</span>city_id<span class="token punctuation">,</span>
                c<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
                t<span class="token punctuation">.</span>time_offset
            <p></p><span class="token keyword">FROM</span> city c
            <p></p><span class="token keyword">JOIN</span> timezone t
            <p></p><span class="token keyword">ON</span> t<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> c<span class="token punctuation">.</span>timezone_id
            <p></p><span class="token keyword">WHERE</span> time_offset <span class="token operator">=</span> <span class="token string">'UTC+3'</span>
            <p></p><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name</code></pre></div></div>

            
            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql17" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql19" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql18;
