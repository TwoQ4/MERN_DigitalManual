import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql16 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Соединение двух таблиц</h3><hr/>&nbsp;<div class="markdown-container"><p>SQL имел бы очень маленькое практическое применение, если бы позволял получать данные только из одной таблицы. </p><p>При проектировании структуры данных стараются исключать дублирование данных (см <a href="https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%84%D0%BE%D1%80%D0%BC%D0%B0">нормальные формы</a>). </p><p>Посмотрим на таблицу городов (<code>city</code>)</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> city</code></pre><table><thead><tr><th>city_id</th><th>name</th><th>timezone_id</th></tr></thead><tbody><tr><td>1</td><td>Москва</td><td>2</td></tr><tr><td>2</td><td>Санкт-Петербург</td><td>2</td></tr><tr><td>3</td><td>Новосибирск</td><td>5</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><p>В ней нет никакой информации o часовом поясе, только его идентификатор. Чтобы получить информацию о часовом поясе, нужно соединить таблицу городов (<code>city</code>) с таблицей часовых поясов (<code>timezone</code>) по идентификатору (<code>timezone_id</code>), т.е. для каждой записи из таблицы городов нужно получить ровно одну запись из таблицы часовых поясов с соответствующим идентификатором.</p><p>Рассмотрим запрос соединения таблиц городов и часовых поясов:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>
            <p></p><span class="token keyword">FROM</span> city
            <p></p><span class="token keyword">JOIN</span> timezone
            <p></p><span class="token keyword">ON</span> timezone<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> city<span class="token punctuation">.</span>timezone_id</code></pre><table><thead><tr><th>city_id</th><th>name</th><th>timezone_id</th><th>timezone_id</th><th>time_offset</th></tr></thead><tbody><tr><td>1</td><td>Москва</td><td>2</td><td>2</td><td>UTC+3</td></tr><tr><td>2</td><td>Санкт-Петербург</td><td>2</td><td>2</td><td>UTC+3</td></tr><tr><td>3</td><td>Новосибирск</td><td>5</td><td>5</td><td>UTC+6</td></tr><tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr></tbody></table><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> <span class="token operator">*</span>             <span class="token comment">-- выбрать все поля</span>
            <p></p><span class="token keyword">FROM</span> city         <span class="token comment">-- из таблицы city</span>
            <p></p><span class="token keyword">JOIN</span> timezone     <span class="token comment">-- присоединить таблицу timezone</span>
            <p></p><span class="token keyword">ON</span> timezone<span class="token punctuation">.</span>timezone_id <span class="token operator">=</span> city<span class="token punctuation">.</span>timezone_id
                <p></p><span class="token comment">-- для каждой записи из city сопоставить запись </span>
                <p></p><span class="token comment">-- из timezone с совпадающим timezone_id</span></code></pre><p>Обрати внимание на столбцы полученного результата, состоящего из 5 столбцов</p><ol><li><code>city_id</code> - идентификатор города из таблицы <code>city</code>;</li><li><code>name</code> - название города из таблицы <code>city</code>;</li><li><code>timezone_id</code> - идентификатор часового пояса из таблицы <code>city</code>;</li><li><code>timezone_id</code> - идентификатор часового пояса из таблицы <code>timezone</code>;</li><li><code>time_offset</code> - время относительно UTC из таблицы <code>timezone</code>.</li></ol><p>Столбец <code>timezone_id</code> встретился дважды в результате, потому что он есть в каждой из таблиц.</p><p>Синтаксис соединения таблиц:</p><pre class="  language-sql"><code class="  language-sql"><span class="token keyword">SELECT</span> список_полей
            <p></p><span class="token keyword">FROM</span> таблица<span class="token number">1</span>
            <p></p><span class="token keyword">JOIN</span> таблица<span class="token number">2</span> <span class="token keyword">ON</span> условия_присоединения_таблицы<span class="token number">2</span>
            <p></p><span class="token keyword">JOIN</span> таблица<span class="token number">3</span> <span class="token keyword">ON</span> условия_присоединения_таблицы<span class="token number">3</span>
            <p></p><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span></code></pre></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql15" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql17" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql16;
