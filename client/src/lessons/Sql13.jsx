import React from 'react';
import {NavLink} from 'react-router-dom';

import './Sql.scss';
import './Lesson.scss'

const Sql13 = () => {
    return (
        
        <div className="lesson">

            <div class="article-content"><h3>Поиск по шаблону</h3><hr/>&nbsp;<div class="markdown-container"><p>В PostgreSQL есть несколько средств поиска текста по шаблону. Наиболее часто используемый оператор <code>LIKE</code> языка <code>SQL</code>:</p><pre class="  language-sql"><code class="  language-sql">строка <span class="token operator">LIKE</span> шаблон</code></pre><p>В шаблоне <code>LIKE</code> можно использовать два спецсимвола</p><ul><li><code>_</code> - заменяет один любой символ;</li><li><code>%</code> - заменяет любую последовательность символов (в том числе пустую)</li></ul><p>Несколько примеров:</p><pre class="  language-sql"><code class="  language-sql"><span class="token string">'abc'</span> <span class="token operator">LIKE</span> <span class="token string">'abc'</span>    <span class="token boolean">true</span>
            <p></p><span class="token string">'abc'</span> <span class="token operator">LIKE</span> <span class="token string">'a%'</span>     <span class="token boolean">true</span>
            <p></p><span class="token string">'abc'</span> <span class="token operator">LIKE</span> <span class="token string">'_b_'</span>    <span class="token boolean">true</span>
            <p></p><span class="token string">'abc'</span> <span class="token operator">LIKE</span> <span class="token string">'c'</span>      <span class="token boolean">false</span></code></pre><p>При проверке по шаблону <code>LIKE</code> всегда рассматривается вся строка. Поэтому, если нужно найти последовательность символов где-то в середине строки, шаблон должен начинаться и заканчиваться знаком <code>%</code>.</p><p>Чтобы найти в строке буквальное вхождение знака процента или подчёркивания, перед соответствующим символом в шаблоне нужно добавить спецсимвол. По умолчанию в качестве спецсимвола выбрана обратная косая черта <code>\</code>, но с помощью предложения <code>ESCAPE</code> можно выбрать и другой. Чтобы включить спецсимвол в шаблон поиска, продублируйте его. Синтаксис <code>LIKE</code> с указанием спецсимвола:</p><pre class="  language-sql"><code class="  language-sql">строка <span class="token operator">LIKE</span> шаблон <span class="token keyword">ESCAPE</span> спецсимвол</code></pre><p>например</p><pre class="  language-sql"><code class="  language-sql"><span class="token string">'_asdfa'</span> <span class="token operator">LIKE</span> <span class="token string">'$_asd%'</span> <span class="token keyword">ESCAPE</span> <span class="token string">'$'</span></code></pre><p>Вместо <code>LIKE</code> можно использовать ключевое слово <code>ILIKE</code>, чтобы поиск был регистр-независимым с учётом текущей языковой среды.</p></div></div>

            &nbsp;<hr/>
            <div className="lesson-nav">
                <NavLink to="/sql12" className="waves-effect waves-light btn-large nav-bottom"> &larr; Предыдущий урок </NavLink>
                <NavLink to="/sql14" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </NavLink>
            </div>
        </div>
    );
}

export default Sql13;
